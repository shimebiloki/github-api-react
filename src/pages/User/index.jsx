import "./style.css";
import Button from "@material-ui/core/Button";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useData } from "../../Providers/Data";
import { useRepos } from "../../Providers/Repos";
import { useFollowers } from "../../Providers/Followers";
import { useFollowing } from "../../Providers/Following";

const User = () => {
  const history = useHistory();

  const { dataUser, setDataUser } = useData();
  const { setReposUser } = useRepos();
  const { setFollowersUser } = useFollowers();
  const { setFollowingUser } = useFollowing();

  const toFollowers = async () => {
    const followers = await axios(`${dataUser.followers_url}`);
    setFollowersUser(followers.data);
    history.push("/followers");
  };

  const toFollowing = async () => {
    const following = await axios(
      `https://api.github.com/users/${dataUser.login}/following`
    );
    setFollowingUser(following.data);
    history.push("/following");
  };

  const toRepos = async () => {
    const repositories = await axios(`${dataUser.repos_url}`);
    setReposUser(repositories.data);
    history.push("/repos");
  };

  const getOut = () => {
    history.push("/");
    setDataUser();
  };
  return (
    <>
      <div className="header">
        <div className="name-user">
          #{dataUser.login}
          <button className="back" onClick={getOut}>
            <MeetingRoomIcon />
            <div>Sair</div>
          </button>
        </div>
        <br />
        <br />
        <img className="image-user" src={dataUser.avatar_url} alt="" />
      </div>
      <div className="data">
        <div className="topic-name">
          <div className="point"></div>
          <div className="name">
            <h1>{dataUser.login}</h1>
            {dataUser.email}
            <br />
            {dataUser.location}
            <br />
            {dataUser.company}
          </div>
        </div>
      </div>
      <br />
      <Button
        style={{ width: "33.33vw", height: "80px", color: "#fff" }}
        onClick={toFollowers}
      >
        <div>{dataUser.followers} - Seguidores</div>
      </Button>
      <Button
        style={{ width: "33.33vw", height: "80px", color: "#fff" }}
        onClick={toFollowing}
      >
        <div>{dataUser.following} - Seguindo</div>
      </Button>
      <Button
        style={{ width: "33.33vw", height: "80px", color: "#fff" }}
        onClick={toRepos}
      >
        <div>{dataUser.public_repos} - Repos</div>
      </Button>
      {dataUser.bio && (
        <div className="bio">
          <div className="topic-bio">
            <div className="point"></div>
            <h1>BIO</h1>
          </div>
          <p>{dataUser.bio}</p>
        </div>
      )}
    </>
  );
};

export default User;
