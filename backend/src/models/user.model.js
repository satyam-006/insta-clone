const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: [true, "Username already exists"],
    required: [true, "Username is required"],
  },
  email: {
    type: String,
    unique: [true, "user already exists with this email"],
    required: [true, "email is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    select:false
  },
  bio: String,
  profileImage: {
    type: String,
    default: "https://plus.unsplash.com/premium_photo-1738980401922-70995a1b6ade?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGVmYXVsdCUyMHByb2ZpbGUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D",
  },
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
