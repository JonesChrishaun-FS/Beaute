const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`${process.env.MONGODB_URI}`);
  } catch (error) {
    console.error(error);
  }
};

module.exports = connectDB;
