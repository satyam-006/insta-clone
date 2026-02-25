const express = require("express");
const postRouter = express.Router();
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
const identifyUser = require("../middlewares/auth.middleware");
const {
  createPostController,
  getPostController,
  getPostDetailsController,
  likePostController,
  unLikePostController,
  getFeedController,
} = require("../controllers/post.controller");

/**
 * @route POST /api/posts/
 * @description Create a new post
 * @access Private
 */
postRouter.post(
  "/",
  upload.single("postImage"),
  identifyUser,
  createPostController,
);

/**
 * @route GET /api/posts/
 * @description Get all posts of the user
 * @access Private
 */
postRouter.get("/", identifyUser, getPostController);

/**
 * @route GET /api/posts/details/:postId
 * @description Get details of a specific post
 * @access Private
 */
postRouter.get("/details/:postId", identifyUser, getPostDetailsController);

/**
 * @route POST /api/posts/like/:postId
 * @description Like a post
 * @access Private
 */
postRouter.post("/like/:postId", identifyUser, likePostController);

/**
 * @route POST /api/posts/like/:postId
 * @description un Like a post
 * @access Private
 */

postRouter.post("/unlike/:postId", identifyUser, unLikePostController);

/**
 * @route POST /api/posts/feed
 * @description Get all all posts
 * @access Private
 */

postRouter.get("/feed", identifyUser, getFeedController);

module.exports = postRouter;
