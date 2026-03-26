import React, { useCallback } from "react";
import "../style/logout.scss";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router";

const Logout = () => {
  const { handleLogout, loading } = useAuth();
  const navigate = useNavigate();

  // if (loading) {
  //  return <h1>Loading...</h1>;
  // }

  const handleLogoutUser = async () => {
    await handleLogout();
    navigate("/login");
  };


  return (
    <div className="logout" onClick={handleLogoutUser}>
      <img
        src="https://ik.imagekit.io/zzkwwuvz9/insta-ui-images/logout.png"
        alt="logout_icon"
      />
      <h4>Log out</h4>
    </div>
  );
};

export default Logout;
