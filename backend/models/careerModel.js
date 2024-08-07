const mongoose = require("mongoose");

const careerSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    employedAt: {
      type: Date,
      default: Date.now,
    },
    detachedAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const Career = mongoose.model("Career", careerSchema);

module.exports = Career;
