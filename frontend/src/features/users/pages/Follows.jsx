import React, { useEffect } from "react";
import "../style/follows.scss";
import { useUser } from "../hooks/useUser";
import Notification from "../components/Notification";
import Follower from "../components/Follower";
import Suggestion from "../components/Suggestion";
import ProfileActivity from "../components/ProfileActivity";
const Follows = () => {
  const {
    loading,
    users,
    handleGetUsers,
    handleFollowUser,
    handleUnFollowUser,
  } = useUser();

  useEffect(() => {
    handleGetUsers();
  }, []);

  // if (loading || !users) {
  //   return (
  //     <main>
  //       <h1>Users loading...</h1>
  //     </main>
  //   );
  // }

  return (
    <div className="follows-container">
      <Notification/>
      <Follower/>
      <Suggestion/>
      <ProfileActivity/>
    </div>
  );
};

export default Follows;
