import { AuthContext } from "../auth.context";
import { login, register, getMe } from "../services/auth.api";
import { useContext, useEffect } from "react";

export const useAuth = () => {
  const context = useContext(AuthContext);

  const { user, setUser, loading, setLoading } = context;

  const handleLogin = async (username, password) => {
    setLoading(true);
    const data = await login(username, password);
    setUser(data?.user);
    setLoading(false);
  };

  const handleRegister = async (username, email, password) => {
    setLoading(true);
    const data = await register(username, email, password);
    setUser(data?.user);
    setLoading(false);
  };

  const handleGetMe = async () => {
    setLoading(true);
    const data = await getMe();
    setUser(data?.user);
    setLoading(false);
  };

  useEffect(() => {
    handleGetMe();
  }, []);

  return {
    user,
    loading,
    handleLogin,
    handleRegister,
    handleGetMe,
  };
};
