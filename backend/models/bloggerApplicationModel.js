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
      enum: ["not-applied", "approved", "pending", "rejected"],
      default: "not-applied",
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
