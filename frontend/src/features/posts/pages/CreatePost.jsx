import { useState, useRef } from "react";
import "../style/createpost.scss";
import { usePost } from "../hooks/usePost";
import { useNavigate } from "react-router";

const CreatePost = () => {
  const [caption, setCaption] = useState("");
  const postImageFileInputRef = useRef(null);
  const { loading, handleCreatePost } = usePost();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const file = postImageFileInputRef.current.files[0];
    await handleCreatePost(file, caption);
    navigate("/");
  };
  if (loading) {
    <main>
      <h1>Creatting post</h1>
    </main>;
  }

  return (
    <main>
      <div className="form-container">
        <h1>Create Post</h1>
        <form onSubmit={handleSubmit}>
          <label className="image-file-label" htmlFor="postImage">
            Select Image
          </label>
          <input
            ref={postImageFileInputRef}
            hidden
            type="file"
            name="postImage"
            id="postImage"
          />
          <input
            onChange={(e) => {
              setCaption(e.target.value);
            }}
            type="text"
            name="caption"
            id="caption"
            placeholder="Enter caption"
          />
          <button className="button button-primary">Create</button>
        </form>
      </div>
    </main>
  );
};

export default CreatePost;
