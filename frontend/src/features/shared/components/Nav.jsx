import React from "react";
import "../nav.scss";
import { useNavigate } from "react-router";

const Nav = () => {
    const navigate  = useNavigate();
  return (
    <nav>
      <h2>Insta</h2>
      <button onClick={() => navigate("/create-post")} className="button button-primary">Create Post</button>
    </nav>
  );
};

export default Nav;
