import { createContext, useContext, useState } from "react";

const FollowersContext = createContext();

export const FollowersProvider = ({ children }) => {
  const [followersUser, setFollowersUser] = useState();

  return (
    <FollowersContext.Provider value={{ followersUser, setFollowersUser }}>
      {children}
    </FollowersContext.Provider>
  );
};

export const useFollowers = () => useContext(FollowersContext);
