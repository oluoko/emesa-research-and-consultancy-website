const mongoose = require("mongoose");

const bloggerApplicationSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    status: {
      type: String,
      enum: ["approved", "pending", "rejected"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

const BloggerApplication = mongoose.model(
  "BloggerApplication",
  bloggerApplicationSchema
);

module.exports = BloggerApplication;
