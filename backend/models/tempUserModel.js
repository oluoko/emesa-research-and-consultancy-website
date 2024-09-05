const mongoose = require("mongoose");

const tempUserSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  verificationToken: String,
  verificationTokenExpires: Date,
});

const TempUser = mongoose.model("TempUser", tempUserSchema);

module.exports = TempUser;
