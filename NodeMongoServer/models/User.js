const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({

    createdOn: {
        type: Date,
        default: Date.now,
        required: true
    },
    userId: {
        type: String
    },
    organizationId: { 
        type: String,
        required: true
    },
    role: {
        type: String 
    },
    name: {
        type: String
    },
    displayName: {
        type: String
    },
    birthday: {
        type: String
    },
    relationship: {
        type: String
    },
    isPerson: {
        type: Boolean
    },
    isPlusUser: {
        type: Boolean
    },
    placesLived: {
        type: String
    },
    language: {
        type: String
    },
    emails: {
        type: String
    },
    gender: {
        type: String
    },
    picture: {
        type: String
    },
    coverPhoto: {
        type: String
    }

});

module.exports = mongoose.model("User", UserSchema);