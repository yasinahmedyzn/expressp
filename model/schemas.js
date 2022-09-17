const mongoose = require("mongoose");

const addSchema = mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  code: {
    type: Number,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

module.exports = addSchema;
