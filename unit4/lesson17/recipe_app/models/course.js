const mongoose = require("../models/mongoose");

const courseSchema = require("mongoose");
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
  items: [],
  zipCode: {
    type: Number,
    min: [10000, "Zip code must be 5 digits long"],
    max: 99999//zip code must be 5 code long
  }
});

module.exports = mongoose.model("Course", courseSchema);

