const FuelUp = require("../models/FuelUp");

exports.getAll = (req, res) => {
  FuelUp.find({}, (err, fuelUp) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    }
    res.status(200).json(fuelUp);
    console.log(fuelUp);
  });
};

exports.getById = (req, body) => {
  FuelUp.findById(req.params.fuelUpId, (err, fuelUp) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(fuelUp);
  });
};

exports.new = (req, res) => {
  let newFuelUp = new FuelUp(req.body);
  console.log(newFuelUp);
  newFuelUp.save((err, fuelUp) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(201).json(fuelUp);
  });
};

exports.update = (req, res) => {
  console.log('fuelUpId at server is ' + req.params.fuelUpId);
  FuelUp.findOneAndUpdate(
    { _id: req.params.fuelUpId },
    req.body,
    { new: false },
    (err, fuelUp) => {
      if (err) {
        res.status(500).send(err);
      }
      console.log(fuelUp);
      res.status(200).json(fuelUp);
    }
  );
};

exports.delete = (req, res) => {
  FuelUp.remove({ _id: req.params.fuelUpId }, (err, fuelUp) => {  // don't know who changed the name from _id
    if (err) {
      res.status(404).send(err);
    }
    res.status(200).json({ message: "FuelUp successfully deleted" });
  });
};