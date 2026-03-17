import { useContext } from "react";
import {
  getFeed,
  createPost,
  postLike,
  postUnLike,
  postCount
} from "../services/post.api";
import { PostContext } from "../post.context";
import { useEffect } from "react";

export function usePost() {
  const context = useContext(PostContext);

  const { loading, setLoading, post, setPost, feed, setFeed, postCountValue,setPostCountValue } = context;

  const handleGetFeed = async () => {
    setLoading(true);
    const data = await getFeed();
    setFeed(data.posts);
    setLoading(false);
  };

  const handleCreatePost = async (imageFile, caption) => {
    setLoading(true);
    const data = await createPost(imageFile, caption);
    setFeed([data, ...feed]);
    setLoading(false);
  };

  const handlePostLike = async (postId) => {
    const data = await postLike(postId);
    await handleGetFeed();
  };

  const handlePostUnLike = async (postId) => {
    const data = await postUnLike(postId);
    await handleGetFeed();
  };

  const handlePostCount = async ()=>{
    const data = await postCount()
    setPostCountValue(data.posts.length);
    
  }

  useEffect(() => {
    handleGetFeed();
    handlePostCount();
  }, []);

  return {
    loading,
    postCount,
    handlePostCount,
    feed,
    handleGetFeed,
    handleCreatePost,
    handlePostLike,
    handlePostUnLike,
  };
}
