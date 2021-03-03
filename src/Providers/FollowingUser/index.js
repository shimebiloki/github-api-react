import { createContext, useContext, useState } from "react";

const FollowingUserContext = createContext();

export const FollowingUserProvider = ({ children }) => {
  const [followingUser, setFollowingUser] = useState();

  return (
    <FollowingUserContext.Provider value={{ followingUser, setFollowingUser }}>
      {children}
    </FollowingUserContext.Provider>
  );
};

export const useFollowingUser = () => useContext(FollowingUserContext);
