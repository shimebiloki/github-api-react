import { useAuthentication } from "../../Providers/Authenticator";
import { useEffect } from "react";
import Home from "../../pages/Home";
import { Switch, Route, useHistory } from "react-router-dom";
import User from "../../pages/User";
import Followers from "../../pages/Followers";
import Following from "../../pages/Following";
import Repos from "../../pages/Repos";
import Follower from "../../pages/Follower";
import FollowingUser from "../../pages/FollowingUser";
import { useData } from "../../Providers/Data";

const Authenticator = () => {
  const { authentication, setAuthentication } = useAuthentication();
  const { dataUser } = useData();

  const history = useHistory();

  useEffect(() => {
    if (!dataUser) {
      setAuthentication(false);
      history.push("/");
    }
    if (dataUser) {
      setAuthentication(true);
    }
  }, [history, authentication, dataUser, setAuthentication]);

  if (!authentication) {
    return (
      <>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </>
    );
  }

  if (authentication) {
    return (
      <>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/user">
            <User />
          </Route>
          <Route path="/followers">
            <Followers />
          </Route>
          <Route path="/following">
            <Following />
          </Route>
          <Route path="/repos">
            <Repos />
          </Route>
          <Route path="/follower">
            <Follower />
          </Route>
          <Route path="/followingUser">
            <FollowingUser />
          </Route>
        </Switch>
      </>
    );
  }
};

export default Authenticator;
