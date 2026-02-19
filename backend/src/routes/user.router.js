const express = require("express")
const identifyUser = require("../middlewares/auth.middleware")
const { followUserController, unfollowUserController } = require("../controllers/user.controller")
const userRouter = express.Router()

/**
 * @route POST /api/users/follow/:userId
 * @description Follow a user
 * @access Private
 */
userRouter.post("/follow/:userId",identifyUser,followUserController)

/**
 * @route POST /api/users/unfollow/:userId
 * @description Unfollow a user
 * @access Private
 */ 
userRouter.post("/unfollow/:userId",identifyUser,unfollowUserController)


module.exports = userRouter