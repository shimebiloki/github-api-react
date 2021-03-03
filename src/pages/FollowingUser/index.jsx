import Button from "@material-ui/core/Button";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useHistory } from "react-router-dom";
import { useFollowingUser } from "../../Providers/FollowingUser";

const FollowingUser = () => {
  const history = useHistory();
  const back = () => {
    history.push("/following");
  };

  const { followingUser } = useFollowingUser();

  return (
    <>
      <div className="header">
        <div className="name-user">
          <button className="back" onClick={back}>
            <ArrowBackIcon />
          </button>
          #{followingUser.login}
        </div>
        <br />
        <br />
        <img className="image-user" src={followingUser.avatar_url} alt="" />
      </div>
      <div className="data">
        <div className="topic-name">
          <div className="point"></div>
          <div className="name">
            <h1>{followingUser.login}</h1>
            {followingUser.email}
            <br />
            {followingUser.location}
            <br />
            {followingUser.company}
          </div>
        </div>
      </div>
      <div className="buttons">
        <Button style={{ width: "33.33vw", height: "80px", color: "#fff" }}>
          <div>{followingUser.followers} - Seguidores</div>
        </Button>
        <Button style={{ width: "33.33vw", height: "80px", color: "#fff" }}>
          <div>{followingUser.following} - Seguindo</div>
        </Button>
        <Button style={{ width: "33.33vw", height: "80px", color: "#fff" }}>
          <div>{followingUser.public_repos} - Repos</div>
        </Button>
      </div>
      {followingUser.bio && (
        <div className="bio">
          <div className="topic-bio">
            <div className="point"></div>
            <h1>BIO</h1>
          </div>
          <p>{followingUser.bio}</p>
        </div>
      )}
    </>
  );
};

export default FollowingUser;
