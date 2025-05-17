const mongoose = require("mongoose");

const beauteSchema = new mongoose.Schema({
  brand: String,
  name: String,
  price: String,
  productLink: String,
  description: String,
});

module.exports = mongoose.model("beaute", beauteSchema);
