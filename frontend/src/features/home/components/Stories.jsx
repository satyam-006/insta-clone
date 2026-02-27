import React from "react";
import "../style/stories.scss";

const Stories = () => {
  const arr = [1, 2, 3, 4, 5, 6];
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
        {arr.map(() => {
          return (
            <div className="user-stories">
              <div className="user-story">
                <img
                  src="https://object.pixocial.com/pixocial/dmxffni837f1xrj8pki9xgrl.jpg"
                  alt="user"
                />
              </div>
              <p>username</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stories;
