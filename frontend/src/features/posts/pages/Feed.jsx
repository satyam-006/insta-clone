import { useEffect } from "react";
import Post from "../components/Post";
import { usePost } from "../hooks/usePost";
import "../style/feed.scss";

const Feed = () => {
  const { loading, feed, handleGetFeed } = usePost();

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
    <main className="feed-page">
      <div className="feed">
        <div className="posts">
          {
            feed.map((post)=>{
              return <Post user={post.user} post={post}/>
            })
          }
        </div>
      </div>
    </main>
  );
};

export default Feed;
