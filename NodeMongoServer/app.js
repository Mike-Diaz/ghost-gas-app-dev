const express = require("express");
const bodyParser = require("body-parser");
const fuelUpController = require("./controllers/FuelUpController");
const vehicleController = require("./controllers/VehicleController");
const cors = require('cors')  // using this module to solve CORS problem
// note the extra line in package.json to download this code

var corsOptions = {
  origin: 'http://localhost:4200',   // this URL must match the URL that the Angular app will call from
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}

// this brings in and sets up the monog db instance connection
require("./config/db");

const app = express();

const port = 3000;  // setting the port number for this server
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(cors(corsOptions))   // bringing in the CORS code to our app

// API ENDPOINTS
// not using the Express Router code, instead just listing them
// each of these 5 routed call one of the 5 methods defined in the controller
// which in turn call Mongo Atlas, each of those 5 do a return to the client
// notive they are "keyed", but HTTP request type, get, put, etc
app
  .route("/fuelup")
  .get(fuelUpController.getAll)
  .post(fuelUpController.new);

app
  .route("/fuelup/:fuelUpId")
  .get(fuelUpController.getById)
  .put(fuelUpController.update)
  .delete(fuelUpController.delete);

app
  .route("/vehicle")
  .get(vehicleController.getAll)
  .post(vehicleController.new);

app
  .route("/vehicle/:vehicleId")
  .get(vehicleController.getById)
  .put(vehicleController.update)
  .delete(vehicleController.delete);

//ouath implementation

let passport = require('passport'),
auth = require('./config/auth');

auth(passport);
app.use(passport.initialize());
app.get('/', (req, res) => {
    res.json({
        status: 'session cookie not set'
    });
});
app.get('/auth/google', passport.authenticate('google', {
    scope: ['https://www.googleapis.com/auth/userinfo.profile']
}));
app.get('/auth/google/callback',
    passport.authenticate('google', {
        failureRedirect: '/'
    }),
    (req, res) => {}
);

//server lisetn

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});