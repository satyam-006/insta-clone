import { useContext, useEffect } from "react";
import { UserContext } from "../user.context";
import { getUsers, followUser, unfollowUser } from "../services/user.api";

export function useUser() {
  const context = useContext(UserContext);

  const { loading, setLoading, users, setUsers } = context;

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

  useEffect(() => {
    handleGetUsers();
  }, []);

  return {
    users,
    loading,
    handleGetUsers,
    handleFollowUser,
    handleUnFollowUser,
  };
}
