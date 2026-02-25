import React, { useEffect } from "react";
import "../style/follows.scss";
import { useUser } from "../hooks/useUser";
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

  if (loading || !users) {
    return (
      <main>
        <h1>Users loading...</h1>
      </main>
    );
  }

  return (
    <div className="follows-content">
      <div className="followers">
        <h4>Followers</h4>
        <div className="followers-container">
          {users?.map((user) => {
            if (user.isFollower) {
              return (
                <div className="follower">
                  <img src={user?.profileImage} alt="" />
                  <p>{user?.username}</p>
                </div>
              );
            }
          })}
        </div>
      </div>
      <div className="followings">
        <h4>Following</h4>

        <div className="following-container">
          {users?.map((user) => {
            if (user?.isFollow) {
              return (
                <div className="following">
                  <div className="left">
                    <img src={user?.profileImage} alt="" />
                    <p>{user?.username}</p>
                  </div>
                  <button
                    onClick={() => {
                      handleUnFollowUser(user?._id);
                    }}
                    className="button button-primary"
                  >
                    Unfollow
                  </button>
                </div>
              );
            }
          })}
        </div>
      </div>
      <div className="suggestions">
        <h4>Others</h4>
        <div className="suggestion-container">
          {users?.map((user) => {
            if (!user.isFollow) {
              return (
                <div className="suggestion">
                  <div className="left">
                    <img src={user?.profileImage} alt="" />
                    <p>{user?.username}</p>
                  </div>
                  <button
                    onClick={() => {
                      handleFollowUser(user?._id);
                    }}
                    className="button button-primary follow-btn"
                  >
                    Follow
                  </button>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Follows;
