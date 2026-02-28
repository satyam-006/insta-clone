import React from "react";
import "../style/stories.scss";

const Stories = () => {
  const arr = [
    {
      img: "https://plus.unsplash.com/premium_photo-1683121769247-7824fdc324de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
      username:"sam"
    },
    {
      img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
      username:"karan"
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
      username:"john"
    },
    {
      img: "https://images.unsplash.com/photo-1723179343134-634c9eadde39?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2ZpbGUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
      username:"sakira"
    },
    {
      img: "https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.webp?a=1&b=1&s=612x612&w=0&k=20&c=0ez7MLSYsOlKDghpVAUDMVf_gT5B_DfKmRNKqElOLUA=",
      username:"priya"
    },
    {img:"https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2ZpbGUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
      username:"sumesh"
    }
  ];
  return (
    <div className="story-container">
      <div className="story-header">
        <h1>Stories</h1>
        <div className="watch">
          Watch all <i class="ri-play-large-fill"></i>
        </div>
      </div>
      <div className="story-box">
        <div className="story-create">
          <div className="wrapper">
            <div className="create-story">
              <i class="ri-add-large-line"></i>
            </div>
          </div>
          <p>Add Story</p>
        </div>
        {arr.map((user) => {
          return (
            <div className="user-stories">
              <div className="user-story">
                <img
                  src={user.img}
                  alt="user"
                />
              </div>
              <p>{user.username}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stories;
