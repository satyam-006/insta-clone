import React from "react";
import "../style/topnav.scss";
import { useNavigate } from "react-router";


const TopNav = () => {

  const navigate = useNavigate()

  return (
    <div className="top-nav">
      <div className="search-bar">
        <i class="ri-search-line"></i>
        <input type="text" placeholder="Search" />
        <i class="ri-mic-line"></i>
      </div>
      <button className="create-post-btn" onClick={()=>{navigate("/create-post")}}><i class="ri-add-large-line"></i> Create new Post</button>
    </div>
  );
};

export default TopNav;
