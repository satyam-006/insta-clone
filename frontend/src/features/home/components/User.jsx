import React, { useState } from "react";
import "../style/user.scss";
import { useEffect } from "react";
import { useAuth } from "../../auth/hooks/useAuth";
import { useContext } from "react";
import { AuthContext } from "../../auth/auth.context";
import { PostContext } from "../../posts/post.context";
import { UserContext } from "../../users/user.context";
import { useNavigate } from "react-router";

const User = () => {
  const { user } = useContext(AuthContext);
  const { users } = useContext(UserContext);
  const { postCountValue } = useContext(PostContext);
  const navigate = useNavigate()
  

  const followers = users?.filter(user => user.isFollow).length || 0;
  const following = users?.filter(user => user.isFollower).length || 0;
  

  return (
    <div className="user">
      <div className="image-wrapper" onClick={()=>{navigate(`/user/detailes/${user.id}`)}}>
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
        <div className="stats followers" onClick={()=>{navigate(`/user/followers/${user.id}`)}}>
          <h4>{followers}</h4>
          <p>Followers</p>
        </div>
        <div className="stats following" onClick={()=>{navigate(`/user/following/${user.id}`)}}>
          <h4>{following}</h4>
          <p>following</p>
        </div>
      </div>
    </div>
  );
};

export default User;
