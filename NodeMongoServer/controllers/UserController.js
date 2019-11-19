const User = require("../models/User");
const mongoose = require("mongoose");

exports.getAll = (req, res) => {
  User.find({}).sort({createdOn: 'asc'}).exec((err, user) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    }
    res.status(200).json(user);
    console.log(user);
  });
};

exports.getById = (req, res) => {
  User.findById(req.params.userId, (err, user) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(user);
  });
};

exports.new = (req, res) => {
  let newUser = new User(req.body);
  console.log(newUser);
  newUser.save((err, user) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(201).json(user);
  });
};

exports.update = (req, res) => {
  console.log('userId at server is ' + req.params.userId);
  User.findOneAndUpdate(
    { _id: req.params.userId },
    req.body,
    { new: false },
    (err, user) => {
      if (err) {
        res.status(500).send(err);
      }
      console.log(user);
      res.status(200).json(user);
    }
  );
};

exports.delete = (req, res) => {
  User.remove({ _id: req.params.userId }, (err, user) => { 
    if (err) {
      res.status(404).send(err);
    }
    res.status(200).json({ message: "User successfully deleted" });
  });
};