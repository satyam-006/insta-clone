const express = require("express");

const cookieParser = require("cookie-parser");

const app = express();

app.use(express.json());
app.use(cookieParser());

/* require route */
const authRouter = require("./routes/auth.router");
const postRouter = require("./routes/post.router");
const userRoute = require("./routes/user.router");

/* using route */
app.use("/api/auth", authRouter);
app.use("/api/posts", postRouter);
app.use("/api/users", userRoute);

module.exports = app;
