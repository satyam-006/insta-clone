const postModel = require("../models/post.model");
const ImageKit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");

const client = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

async function createPostController(req, res) {
  const { caption } = req.body;

  const file = await client.files.upload({
    file: await toFile(Buffer.from(req.file.buffer), "file"),
    fileName: "insta-post",
    folder: "insta-clone-posts",
  });

  const post = await postModel.create({
    caption,
    imgUrl: file.url,
    user: req.user.id,
  });

  res.status(201).json({
    message: "Post created successfully",
    post,
  });
}

async function getPostController(req, res) {
  user = req.user.id;

  const posts = await postModel.find({ user });

  res.status(200).json({
    message: "Posts fetched successfully",
    posts,
  });
}

async function getPostDetailsController(req, res) {

    const postId = req.params.postId
    const user = req.user

    const post = await postModel.findById(postId)

    if(!post){
        return res.status(404).json({
            message:"Post not found"
        })
    }

    const isvalidUser = post.user.toString() == user.id

    if(!isvalidUser){
        return res.status(403).json({
            message:"Forbidden content"
        })
    }

    res.status(200).json({
        message:"Post details fetched successfully",
        post
    })

}

module.exports = {
  createPostController,
  getPostController,
  getPostDetailsController,
};
