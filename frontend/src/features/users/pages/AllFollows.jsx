import React from "react";
import "../style/allfollows.scss";

const AllFollows = () => {
  return (
    <div className="all-followes-container">
      <div className="nav">
        <i class="ri-arrow-left-line"></i>
        <h2>Followers</h2>
      </div>
      <div className="follows-content">
        <div className="follows">
            <div className="user-detail">
                <img src="https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg?semt=ais_rp_progressive&w=740&q=80" alt="" />
                <p>username</p>
            </div>
            <button>Follow</button>
        </div>
        <div className="follows">
            <div className="user-detail">
                <img src="https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg?semt=ais_rp_progressive&w=740&q=80" alt="" />
                <p>username</p>
            </div>
            <button className="button button-primary">Follow</button>
        </div>
      </div>
    </div>
  );
};

export default AllFollows;
