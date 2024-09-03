const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `MongoDB Connected: ${conn.connection.host}`.green.bold.underline.inverse
    );
  } catch (error) {
    console.error(
      `\nMongoDB Connection Error: ${error.message}\n`.red.bold.underline
        .inverse
    );
    process.exit(1);
  }
};

module.exports = connectDB;
