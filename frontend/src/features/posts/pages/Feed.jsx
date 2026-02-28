import { useEffect } from "react";
import Post from "../components/Post";
import { usePost } from "../hooks/usePost";
import "../style/feed.scss";
import Nav from "../../shared/components/Nav";
import Follows from "../../users/pages/Follows";

const Feed = () => {
  const { loading, feed, handleGetFeed, handlePostLike, handlePostUnLike } =
    usePost();

  useEffect(() => {
    handleGetFeed();
  }, []);

  // if (loading || !feed) {
  //   return (
  //     <main>
  //       <h1>Feed is loading...</h1>
  //     </main>
  //   );
  // }

  return (
    <div className="feed-container">
      <div className="top-part">
        <h1>Feeds</h1>
        <div className="filter-container">
          <button className="latest-btn">Latest</button>
          <button className="popular-btn">Popular</button>
        </div>
      </div>
      <div className="posts">
        <div className="post">
          <div className="post-header">
            <div className="user-profile">
              <img
                src="https://images.unsplash.com/photo-1771919005587-d49d985daa0b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <h3>perdana</h3>
            </div>
            <i class="ri-more-2-fill"></i>
          </div>
          <img
            src="https://images.unsplash.com/photo-1761839257946-4616bcfafec7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8"
            alt=""
          />
          <div className="stats">
            <div className="icon">
              <i class="ri-heart-line"></i>
              <p>
                <span>3.5k </span> Like
              </p>
            </div>
            <div className="icon">
              <i class="ri-chat-3-line"></i>
              <p><span>33</span> Comment</p>
            </div>
            <div className="icon">
              <i class="ri-share-line"></i>
              <p><span>134</span> Share</p>
            </div>
            <div className="icon">
              <i class="ri-bookmark-line"></i>
              <p><span>16</span> Saved</p>
            </div>
          </div>
          <p className="caption">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, natus. Lorem ipsum dolor sit amet.</p>
          <div className="add-comment">
            <img src="https://images.unsplash.com/photo-1771919005587-d49d985daa0b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
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
      </div>
    </div>
  );
};

export default Feed;
