const express = require("express")
const { registerController, loginController, getMeController } = require("../controllers/auth.controller")
const identifyUser = require("../middlewares/auth.middleware")


const authRouter = express.Router()

/**
 * @route POST /api/auth/register
 * @description Register a new user
 * @access Public
 */
authRouter.post("/register",registerController)

/**
 * @route POST /api/auth/login
 * @description Login a user
 * @access Public
 */
authRouter.post("/login",loginController)

/**
 * @route GET /api/auth/get-me
 * @description Get the authenticated user's information
 * @access Private
 */
authRouter.get("/get-me",identifyUser,getMeController)

module.exports = authRouter