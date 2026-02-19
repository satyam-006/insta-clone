const mongoose = require("mongoose");

const followScheme = new mongoose.Schema(
  {
    follower: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    followee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    status: {
      type: String,
      default: "pending",
      enum: {
        values: ["pending", "accepted", "rejected"],
        message: "status can only be pending, accepted or rejected",
      },
    },
  },
  { timestamps: true },
);

followScheme.index({ follower: 1, followee: 1 }, { unique: true });

const followModel = mongoose.model("follows", followScheme);

module.exports = followModel;
