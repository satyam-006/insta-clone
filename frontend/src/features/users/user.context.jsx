import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState(null);

  return (
    <UserContext.Provider value={{ loading, setLoading, users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
};
