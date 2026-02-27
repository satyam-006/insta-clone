import React from "react";
import "../style/topnav.scss";

const TopNav = () => {
  return (
    <div className="top-nav">
      <div className="search-bar">
        <i class="ri-search-line"></i>
        <input type="text" placeholder="Search" />
        <i class="ri-mic-line"></i>
      </div>
      <button className="create-post-btn"><i class="ri-add-large-line"></i> Create new Post</button>
    </div>
  );
};

export default TopNav;
