const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
    // _id is automatically generated in Schema object
    createdOn: {
        type: Date,
        default: Date.now,
        required: true
    },
    credentialId: { // TODO: This should be received by Google oAuth credentials tokenizer.
        type: String
    },
    employeeId: { // TODO: This should auto populate with the employee ID inserting the data
        type: String,
        required: true
    },
    vehicleId: { // TODO: Might be a property which holds multiple objects, those being the vehicles which belong to this user. We might change this to be pulled from the org only and not from the employee itself.
        type: String,
        required: true
    },
    organizationId: {
        type: String,
    },
    priviledgeLevel: {
        type: String
    }
});

module.exports = mongoose.model("FuelUp", FuelUpSchema);