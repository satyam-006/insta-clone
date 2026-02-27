import React from "react";
import "../style/navigation.scss";
import { NavLink } from "react-router";

const Navigation = () => {
  return (
    <div className="navigation">
      <NavLink
        to={"/"}
        className={`${({ isActive }) => (isActive ? "active" : "")} navlink`}
      >
        <div className="highlight-bar"></div>
        <i className="ri-home-5-line"></i>
        <h4 className="">Feed</h4>
      </NavLink>
      <NavLink
        to={"/feed"} 
      className={`${({ isActive }) => (isActive ? "active" : "")} navlink`}>
        <div className="highlight-bar"></div>
        <i className="ri-bookmark-line"></i>
        <h4>My Favorites</h4>
      </NavLink>
      <NavLink
        to={"/post"}
       className={`${({ isActive }) => (isActive ? "active" : "")} navlink`}>
        <div className="highlight-bar"></div>
        <i className="ri-bar-chart-2-line"></i>
        <h4>Stats</h4>
      </NavLink>
      <NavLink
      to={"/setting"}
       className={`${({ isActive }) => (isActive ? "active" : "")} navlink`}>
        <div className="highlight-bar"></div>
        <i className="ri-settings-4-line"></i>
        <h4>Setting</h4>
      </NavLink>
    </div>
  );
};

export default Navigation;
