import React from "react";
import "../style/topnav.scss";
import { useNavigate } from "react-router";


const TopNav = () => {

  const navigate = useNavigate()

  return (
    <div className="top-nav">
      <div className="search-bar">
        <i className="ri-search-line"></i>
        <input type="text" placeholder="Search" />
        <i className="ri-mic-line"></i>
      </div>
      <button className="create-post-btn" onClick={()=>{navigate("/create-post")}}><i className="ri-add-large-line"></i> Create new Post</button>
    </div>
  );
};

export default TopNav;
