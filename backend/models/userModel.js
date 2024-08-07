const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const statusSchema = mongoose.Schema({
  applicationStatus: {
    type: String,
    enum: ["not-applied", "approved", "pending", "rejected"],
    default: "not-applied",
  },
  appliedAt: {
    type: Date,
  },
  reviewedAt: {
    type: Date,
  },
});

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    isEmployee: {
      type: Boolean,
      required: true,
      default: false,
    },
    isBlogger: {
      type: Boolean,
      required: true,
      default: false,
    },
    isAttachee: {
      type: Boolean,
      required: true,
      default: false,
    },
    bloggerApplicationStatus: statusSchema,
    employeeApplicationStatus: statusSchema,
    attacheeApplicationStatus: statusSchema,
    bio: {
      type: String,
      default: "",
      trim: true,
      maxlength: 180,
    },
    profileUrl: {
      type: String,
      default:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    },
  },
  {
    timestamps: true,
  }
);

// Match user entered password to hashed password in database
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Encrypt password using bcrypt
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);

module.exports = User;
