const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// This is what a developer would be assigned. They are allowed the highest priviledge.
const SuperUserSchema = new Schema({
    // _id is automatically generated in Schema object
    createdOn: {
        type: Date,
        default: Date.now,
        required: true
    },
    credentialId: { // TODO: This should be received by Google oAuth credentials tokenizer.
        type: String
    },
    organizationID: { // TODO: This should auto populate with the employee ID inserting the data. FK. This would be all Orgs.. 
        type: String,
        required: true
    },
    vehicleId: { // TODO: Might be a property which holds multiple objects, those being the vehicles which belong to this user. We might change this to be pulled from the org only and not from the employee itself.
        type: String,
        required: true
    },
    employeeIds: {
        type: Object // TODO: this should hold a list of all employees belonging to this organization including admins. This would be all eployees.
    },
    priviledgeLevel: {
        type: String
    }
});

module.exports = mongoose.model("FuelUp", FuelUpSchema);