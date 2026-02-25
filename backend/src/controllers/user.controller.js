const followModel = require("../models/follow.model");
const userModel = require("../models/user.model");

async function getUserController(req, res) {
  userId = req.user.id;

  const users = await Promise.all(
    (await userModel.find().lean()).map(async (user) => {
      const isFollow = await followModel.findOne({
        follower: userId,
        followee: user._id,
      });

      const isFollower = await followModel.findOne({
        follower: user._id,
        followee: userId,
      });

      user.isFollow = Boolean(isFollow);
      user.isFollower = Boolean(isFollower);
      return user;
    }),
  );

  if (!users) {
    return res.status(404).json({
      message: "No users found",
    });
  }

  const filteredUsers = users.filter((user) => user._id != userId);

  res.status(200).json({
    message: "Users fetched successfully",
    users: filteredUsers,
  });
}

async function followUserController(req, res) {
  const followerId = req.user.id;
  const followeeId = req.params.userId;

  const isFollweeExists = await userModel.findById(followeeId);

  if (!isFollweeExists) {
    return res.status(404).json({
      message: "User you want to follow is not found",
    });
  }

  if (followeeId == followerId) {
    return res.status(400).json({
      message: "You cannot follow yourself",
    });
  }

  const isAlreadyFollowing = await followModel.findOne({
    follower: followerId,
    followee: followeeId,
  });

  if (isAlreadyFollowing) {
    return res.status(200).json({
      message: `You already following ${isFollweeExists.username}`,
      follow: isAlreadyFollowing,
    });
  }

  const followRecord = await followModel.create({
    follower: followerId,
    followee: followeeId,
  });

  res.status(201).json({
    message: `You are now following ${isFollweeExists.username}`,
    follow: followRecord,
  });
}

async function unfollowUserController(req, res) {
  const followerId = req.user.id;
  const followeeId = req.params.userId;

  const isUserFollowing = await followModel.findOne({
    follower: followerId,
    followee: followeeId,
  });
  const follweeUser = await userModel.findById(followeeId);

  if (!isUserFollowing) {
    return res.status(200).json({
      message: `You are not following ${follweeUser.username}`,
    });
  }

  await followModel.findByIdAndDelete(isUserFollowing._id);

  res.status(200).json({
    message: `You have unfolloed ${follweeUser.username}`,
  });
}

module.exports = {
  followUserController,
  unfollowUserController,
  getUserController,
};
