import React from "react";
import "../style/user.scss";
import { useEffect } from "react";
import { useAuth } from "../../auth/hooks/useAuth";
import { useContext } from "react";
import { AuthContext } from "../../auth/auth.context";
import { PostContext } from "../../posts/post.context";

const User = () => {

  const {user} = useContext(AuthContext)
  const {postCountValue} = useContext(PostContext)
  console.log(postCountValue);
  

  return (
    <div className="user">
      <div className="image-wrapper">
        <img
          src={user.profileImage}
          alt="profile-image"
        />
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
            <h4>37.2k</h4>
          <p>Followers</p>
        </div>
        <div className="stats following">
            <h4>989</h4>
          <p>following</p>
        </div>
      </div>
    </div>
  );
};

export default User;
