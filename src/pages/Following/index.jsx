import { useFollowing } from "../../Providers/Following";
import { useHistory } from "react-router-dom";
import { useFollowingUser } from "../../Providers/FollowingUser";
import axios from "axios";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const Following = () => {
  const { followingUser } = useFollowing();
  const { setFollowingUser } = useFollowingUser();
  const history = useHistory();
  const back = () => {
    history.push("/user");
  };
  return (
    <>
      <button className="back" onClick={back}>
        <ArrowBackIcon />
      </button>
      <div className="users">
        {followingUser.map((item, index) => {
          return (
            <>
              <button
                className="card-followers"
                onClick={async () => {
                  const userFollowing = await axios(
                    `https://api.github.com/users/${followingUser[index].login}`
                  );
                  setFollowingUser(userFollowing.data);
                  history.push("/followingUser");
                }}
              >
                <div className="follower" key={index}>
                  <div className="point"></div>
                  <img
                    className="image-follower"
                    src={item.avatar_url}
                    alt=""
                  />
                  <div className="item-login">#{item.login}</div>
                </div>
                <ArrowForwardIcon />
              </button>
              <br />
            </>
          );
        })}
      </div>
    </>
  );
};

export default Following;
