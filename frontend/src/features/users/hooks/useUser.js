import { useContext, useEffect } from "react";
import { UserContext } from "../user.context";
import {
  getUsers,
  followUser,
  unfollowUser,
  getUserDetails,
} from "../services/user.api";

export function useUser() {
  const context = useContext(UserContext);

  const { loading, setLoading, users, setUsers, userDetails, setUserDetails } =
    context;

  const handleGetUsers = async () => {
    setLoading(true);
    const data = await getUsers();
    setUsers(data.users);
    setLoading(false);
  };

  const handleFollowUser = async (userId) => {
    const data = await followUser(userId);
    handleGetUsers();
  };
  const handleUnFollowUser = async (userId) => {
    const data = await unfollowUser(userId);
    handleGetUsers();
  };

  const handleGetUserDetails = async (userId) => {
    setLoading(true)
    const data = await getUserDetails(userId);
    setUserDetails(data?.user);
    setLoading(false)
  };

  useEffect(() => {
    handleGetUsers();
  }, []);

  return {
    users,
    userDetails,
    loading,
    handleGetUsers,
    handleFollowUser,
    handleUnFollowUser,
    handleGetUserDetails,
  };
}
