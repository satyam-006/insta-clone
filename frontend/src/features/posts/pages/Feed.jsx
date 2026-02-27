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
      
    </div>
  );
};

export default Feed;
