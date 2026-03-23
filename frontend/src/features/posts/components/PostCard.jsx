import React, { useContext } from "react";
import { AuthContext } from "../../auth/auth.context";

const PostCard = ({ feedData }) => {
  const { user } = useContext(AuthContext);
  

  return (
    <div className="post">
      <div className="post-header">
        <div className="user-profile">
          <img src={feedData.user.profileImage} alt="" />
          <h3>{feedData.user.username}</h3>
        </div>
        <i class="ri-more-2-fill"></i>
      </div>
      <img src={feedData.imgUrl} alt="" />
      <div className="stats">
        <div className="icon">
          {feedData.isLiked ? (
            <i class="ri-heart-fill liked"></i>
          ) : (
            <i class="ri-heart-line"></i>
          )}
          <p>
            <span>3.5k </span> Like
          </p>
        </div>
        <div className="icon">
          <i class="ri-chat-3-line"></i>
          <p>
            <span>33</span> Comment
          </p>
        </div>
        <div className="icon">
          <i class="ri-share-line"></i>
          <p>
            <span>134</span> Share
          </p>
        </div>
        <div className="icon">
          <i class="ri-bookmark-line"></i>
          <p>
            <span>16</span> Saved
          </p>
        </div>
      </div>
      <p className="caption">{feedData.caption}</p>
      <div className="add-comment">
        <img src={user.profileImage} alt="" />
        <div className="input-group">
          <input type="text" placeholder="Write your comment..." />
          <div className="file-icons">
            <i class="ri-attachment-2"></i>
            <i class="ri-emotion-happy-line"></i>
            <i class="ri-image-line"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
