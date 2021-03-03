import { createContext, useContext, useState } from "react";

const FollowingContext = createContext();

export const FollowingProvider = ({ children }) => {
  const [followingUser, setFollowingUser] = useState();

  return (
    <FollowingContext.Provider value={{ followingUser, setFollowingUser }}>
      {children}
    </FollowingContext.Provider>
  );
};

export const useFollowing = () => useContext(FollowingContext);
