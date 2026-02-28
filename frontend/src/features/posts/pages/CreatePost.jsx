import { useState, useRef } from "react";
import "../style/createpost.scss";
import { usePost } from "../hooks/usePost";
import { useNavigate } from "react-router";

const CreatePost = () => {
  const [caption, setCaption] = useState("");
  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [image, setImage] = useState(null);
  const { loading, handleCreatePost } = usePost();

  const navigate = useNavigate();

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];

    if (file && file.type.startsWith("image/")) {
      setFile(file);
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
    setIsDragging(false);
  };

  const handleInputSelectedFile = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };
  

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
    <main className="create-post">
      <div className="form-container">
        <h1>Instagram</h1>
        <h2>Create Post</h2>
        <form onSubmit={handleSubmit}>
          <div
            className={`drag-image ${isDragging ? "drag-over" : ""}`}
            onDragOver={(e) => {
              e.preventDefault();
              setIsDragging(true);
            }}
            onDragLeave={() => {
              setIsDragging(false);
            }}
            onDrop={handleDrop}
            style={{
              height: "250px",
              backgroundImage: image ? `url(${image})` : "none",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <p style={{ display: image ? "none" : "" }}>
              Drag & Drop or <label htmlFor="postImage">Choose file </label>to
              upload
            </p>
          </div>
          <input
            onChange={handleInputSelectedFile}
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
