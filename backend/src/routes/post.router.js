const express = require("express")
const postRouter = express.Router()
const multer = require("multer")
const upload = multer({storage:multer.memoryStorage()})
const identifyUser = require("../middlewares/auth.middleware")
const { createPostController, getPostController ,getPostDetailsController} = require("../controllers/post.controller")

postRouter.post("/",upload.single("image"),identifyUser,createPostController)

postRouter.get("/",identifyUser,getPostController)

postRouter.get("/details/:postId",identifyUser,getPostDetailsController)

module.exports = postRouter