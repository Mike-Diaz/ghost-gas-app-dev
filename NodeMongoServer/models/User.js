const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// This is what a developer would be assigned. They are allowed the highest priviledge.
const UserSchema = new Schema({
    // _id is automatically generated in Schema object
    createdOn: {
        type: Date,
        default: Date.now,
        required: true
    },
    organizationId: { // TODO: This should auto populate with the employee ID inserting the data. FK. This would be all Orgs.. Maybe array since superuser role will have all orgs?
        type: String,
        required: true
    },
    vehicleId: { // TODO: Might be a property which holds multiple objects, those being the vehicles which belong to this user. We might change this to be pulled from the org only and not from the employee itself.
        type: String,
        required: true
    },
    role: {
        type: String // This will contain what roles the user is assigned. SuperUser, Org, Admin, Employee.
    },
    // From passport oAuth
    id: {
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
        type: String
    },
    isPlusUser: {
        type: String
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

module.exports = mongoose.model("SuperUser", UserSchema);