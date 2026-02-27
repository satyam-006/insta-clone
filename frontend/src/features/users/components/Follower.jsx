import React from "react";
import "../style/follower.scss";
const Follower = () => {
  return (
    <div className="follower">
      <h4>New Followers</h4>
      <div className="follower-container">
        <div className="followee">
          <div className="followee-detail">
            <img src="" alt="" />
            <p>username</p>
          </div>
          <button>Follow Back</button>
        </div>
        <div className="followee">
          <div className="followee-detail">
            <img src="" alt="" />
            <p>username</p>
          </div>
          <button>Follow Back</button>
        </div>
        <div className="followee">
          <div className="followee-detail">
            <img src="" alt="" />
            <p>username</p>
          </div>
          <button>Follow Back</button>
        </div>
      </div>
    </div>
  );
};

export default Follower;
