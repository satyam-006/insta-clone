import React from "react";
import "../style/follower.scss";
const Follower = () => {
  return (
    <div className="follower">
      <h4>New Followers</h4>
      <div className="follower-container">
        <div className="followee">
          <div className="followee-detail">
            <img src="https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D" alt="" />
            <p>john</p>
          </div>
          <button>Follow Back</button>
        </div>
        <div className="followee">
          <div className="followee-detail">
            <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
            <p>karan</p>
          </div>
          <button>Follow Back</button>
        </div>
        <div className="followee">
          <div className="followee-detail">
            <img src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2ZpbGUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D" alt="" />
            <p>sumesh</p>
          </div>
          <button>Follow Back</button>
        </div>
      </div>
    </div>
  );
};

export default Follower;
