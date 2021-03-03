import { createContext, useContext, useState } from "react";

const FollowerContext = createContext();

export const FollowerProvider = ({ children }) => {
  const [followerUser, setFollowerUser] = useState();

  return (
    <FollowerContext.Provider value={{ followerUser, setFollowerUser }}>
      {children}
    </FollowerContext.Provider>
  );
};

export const useFollower = () => useContext(FollowerContext);
