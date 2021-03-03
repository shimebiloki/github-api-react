import "./style.css";
import { useFollowers } from "../../Providers/Followers";
import { useHistory } from "react-router-dom";
import { useFollower } from "../../Providers/Follower";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import axios from "axios";

const Followers = () => {
  const history = useHistory();
  const back = () => {
    history.push("/user");
  };
  const { followersUser } = useFollowers();
  const { setFollowerUser } = useFollower();

  return (
    <>
      <button className="back" onClick={back}>
        <ArrowBackIcon />
      </button>
      <div className="users">
        {followersUser.map((item, index) => {
          return (
            <>
              <button
                className="card-followers"
                onClick={async () => {
                  const userFollower = await axios(
                    `https://api.github.com/users/${followersUser[index].login}`
                  );
                  setFollowerUser(userFollower.data);
                  history.push("/follower");
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

export default Followers;
