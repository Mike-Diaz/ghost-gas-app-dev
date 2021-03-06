const GoogleStrategy = require('passport-google-oauth20');
const User = require('../models/User');
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
        async (request, accessToken, refreshToken, profile, done) => {
            console.log('Getting User Information');

            const userData = new User({
                organizationId: '1', // example organizationId since it's required in the schema?
                googleId: profile.id,
                name: profile.name.givenName + ' ' + profile.name.familyName,
                email: profile.emails[0].value,
                picture: profile.photos[0].value
            });

            let userId = '';
            const userDoc = await User.find({googleId: userData.googleId}).exec();

            if (userDoc.length) {
                // Exists already
                console.log('User already exists: ', userDoc[0]);
                userId = userDoc[0]._id;
            } else {
                // Doesn't exist, create new user
                const newUser = await userData.save();
                console.log('New user created: ' + newUser);
                userId = newUser._id;
            }

            return done(null, {
                token: accessToken,
                userId: userId
            });
        }));
};