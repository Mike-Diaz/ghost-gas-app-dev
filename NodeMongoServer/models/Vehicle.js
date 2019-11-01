const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VehicleSchema = new Schema({
    _id: {
        type: String,
        required: false
    },
    vehicleID: {
        type: Number,
        required: true
    },
    createdOn: {
        type: Date,
        default: Date.now
    },
    employeeId: { // TODO: This should auto populate with the employee ID inserting the data
        type: Number, // This is to show which employee created the vehicle
        required: true
    },
    make: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    vin: {
        type: String,
        required: false // Some fleets may include vehicles/equipment with no VIN
    }
});

module.exports = mongoose.model("Tasks", VehicleSchema);