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
  },
  { timestamps: true },
);

const followModel = mongoose.model("follows", followScheme);

module.exports = followModel;
