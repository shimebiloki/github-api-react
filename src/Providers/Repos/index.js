import { createContext, useContext, useState } from "react";

const ReposContext = createContext();

export const ReposProvider = ({ children }) => {
  const [reposUser, setReposUser] = useState();

  return (
    <ReposContext.Provider value={{ reposUser, setReposUser }}>
      {children}
    </ReposContext.Provider>
  );
};

export const useRepos = () => useContext(ReposContext);
