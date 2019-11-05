const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FuelUpSchema = new Schema({
    _id: {
        type: String,
        required: false
    },
    createdOn: {
        type: Date,
        default: Date.now,
        required: true
    },
    employeeId: { // TODO: This should auto populate with the employee ID inserting the data
        type: Number,
        required: true
    },
    vehicleId: {
        type: Number,
        required: true
    },
    fuelUpDate: {
        type: Date,
        required: true
    },
    miles: {
        type: Number,
        required: true,
    },
    gallons: {
        type: Number,
        required: true,
    },
    totalCost: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("FuelUp", FuelUpSchema);