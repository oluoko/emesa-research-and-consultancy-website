const mongoose = require("mongoose");

const employeeApplicationSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    status: {
      type: String,
      enum: ["not-applied", "approved", "pending", "rejected"],
      default: "not-applied",
    },
    resume: {
      type: String,
      required: true,
    },
    coverLetter: {
      type: String,
      required: true,
    },
    recommendationLetters: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const EmployeeApplication = mongoose.model(
  "EmployeeApplication",
  employeeApplicationSchema
);

module.exports = EmployeeApplication;
