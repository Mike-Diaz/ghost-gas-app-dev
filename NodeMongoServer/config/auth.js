const GoogleStrategy = require('passport-google-oauth20');
const user = require('../models/User');
module.exports = (passport) => {

    passport.serializeUser((user, done) => {
        done(null, user);
    });
    passport.deserializeUser((user, done) => {
        done(null, user);
    });
    passport.use(new GoogleStrategy({
            clientID: '815524578815-3nv29mn29tde9f465o0447arm5eu3bdl.apps.googleusercontent.com',
            clientSecret: 'DvzTotxtCsMFo8NcCXE_7r50',
            callbackURL: 'http://localhost:3000/auth/google/callback',
            passReqToCallback: true
        }, 
        (token, refreshToken, profile, done) => {
            console.log('Getting User Information')
            console.log(profile);
            new user({
                userID:profile.id,
                name:profile.givenName + ' ' + profile.familyName,
                email:profile.emails[0].value,
                picture:profile.photos[0].value
            }).save().then((newUser) => {
                console.log('new user created: ' + newUser );
            })
            return done(null, {
                token: token
            });
        }));
};