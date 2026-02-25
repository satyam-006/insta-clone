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

  if (loading || !feed) {
    return (
      <main>
        <h1>Feed is loading...</h1>
      </main>
    );
  }

  return (
    <main className="feed-container">
      <Follows/>
      <div className="feed-content">
        <Nav />
        <div className="feed">
          <div className="posts">
            {feed.map((post) => {
              return (
                <Post
                  user={post.user}
                  post={post}
                  handlePostLike={handlePostLike}
                  handlePostUnLike={handlePostUnLike}
                />
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Feed;
