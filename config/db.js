const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("Database connected successfully");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;