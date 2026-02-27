import React from "react";
import "../style/user.scss";

const User = () => {
  return (
    <div className="user">
      <div className="image-wrapper">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkAJEkJQ1WumU0hXNpXdgBt9NUKc0QDVIiaw&s"
          alt="profile-image"
        />
      </div>
      <div className="user-detail">
        <h4>Vera Cherry</h4>
        <p>Bermen,Germany</p>
      </div>
      <div className="user-stats">
        <div className="stats posts">
          <h4>500</h4>
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
