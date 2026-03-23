import React, { useState } from "react";
import "../style/user.scss";
import { useEffect } from "react";
import { useAuth } from "../../auth/hooks/useAuth";
import { useContext } from "react";
import { AuthContext } from "../../auth/auth.context";
import { PostContext } from "../../posts/post.context";
import { UserContext } from "../../users/user.context";

const User = () => {
  const { user } = useContext(AuthContext);
  const { users } = useContext(UserContext);
  const { postCountValue } = useContext(PostContext);
  

  const followers = users?.filter(user => user.isFollow).length || 0;
  const following = users?.filter(user => user.isFollower).length || 0;


  return (
    <div className="user">
      <div className="image-wrapper">
        <img src={user.profileImage} alt="profile-image" />
      </div>
      <div className="user-detail">
        <h4>{user.username}</h4>
        <p>{user?.location}</p>
      </div>
      <div className="user-stats">
        <div className="stats posts">
          <h4>{postCountValue}</h4>
          <p>posts</p>
        </div>
        <div className="stats followers">
          <h4>{followers}</h4>
          <p>Followers</p>
        </div>
        <div className="stats following">
          <h4>{following}</h4>
          <p>following</p>
        </div>
      </div>
    </div>
  );
};

export default User;
