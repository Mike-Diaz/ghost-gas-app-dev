const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({

    createdOn: {
        type: Date,
        default: Date.now,
        required: true
    },
    organizationId: { 
        type: String,
        required: true
    },
    role: {
        type: String 
    },
//all information from google
    googleId: { // the userId from google account
        type: String
    },
    name: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    picture: {
        type: String
    },
});

// Make variable from mongoose.model() to export for auto-completion support in IDE
var User = mongoose.model("User", UserSchema);
module.exports = User;