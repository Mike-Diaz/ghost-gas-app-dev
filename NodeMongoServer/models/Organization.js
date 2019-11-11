const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrganizationSchema = new Schema({
    // _id is automatically generated in Schema object
    createdOn: {
        type: Date,
        default: Date.now,
        required: true
    },
    credentialId: { // TODO: This should be received by Google oAuth credentials tokenizer.
        type: String
    },
    organizationID: { // TODO: This should auto populate with the employee ID inserting the data. PK
        type: String,
        required: true
    },
    vehicleId: { // TODO: Might be a property which holds multiple objects, those being the vehicles which belong to this user. We might change this to be pulled from the org only and not from the employee itself.
        type: String,
        required: true
    },
    employeeIds: {
        type: Object // TODO: this should hold a list of all employees belonging to this organization including admins.
    },
    priviledgeLevel: {
        type: String
    }
});

module.exports = mongoose.model("Organization", OrganizationSchema);