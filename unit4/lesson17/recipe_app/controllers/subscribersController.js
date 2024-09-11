"use strict";

const Subscriber = require("../models/subscriber");

// exports.getAllSubscribers = (req, res, next) => {
//   Subscriber.find({}, (error, subscribers) => {
//     if (error) next(error);
//     req.data = subscribers;
//     next();
//   });
// };

const mongoose = require("mongoose");
const subscriberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true
  },
  zipCode: {
    type: Number,
    min: [10000, "Zip code must be 5 digits long"],
    max: 99999//zip code must be 5 code long
  }
});

//returns subscriber information
subscriberSchema.methods.getInfo = function () {
  return `Name: ${this.name} Email: ${this.email} Zip Code:${this.zipCode}`;
};
//finds subscriber by zip code
subscriberSchema.methods.findLocalSubscribers = function () {
  return this.model("Subscriber")
    .find({ zipCode: this.zipCode })
    .exec();
};

module.exports = mongoose.model("Subscriber", subscriberSchema);



