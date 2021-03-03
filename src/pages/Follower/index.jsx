import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import { useFollower } from "../../Providers/Follower";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const Follower = () => {
  const history = useHistory();
  const back = () => {
    history.push("/followers");
  };

  const { followerUser } = useFollower();

  return (
    <>
      <div className="header">
        <div className="name-user">
          <button className="back" onClick={back}>
            <ArrowBackIcon />
          </button>
          #{followerUser.login}
        </div>
        <br />
        <br />
        <img className="image-user" src={followerUser.avatar_url} alt="" />
      </div>
      <div className="data">
        <div className="topic-name">
          <div className="point"></div>
          <div className="name">
            <h1>{followerUser.login}</h1>
            {followerUser.email}
            <br />
            {followerUser.location}
            <br />
            {followerUser.company}
          </div>
        </div>
      </div>
      <div className="buttons">
        <Button style={{ width: "33.33vw", height: "80px", color: "#fff" }}>
          <div>{followerUser.followers} - Seguidores</div>
        </Button>
        <Button style={{ width: "33.33vw", height: "80px", color: "#fff" }}>
          <div>{followerUser.following} - Seguindo</div>
        </Button>
        <Button style={{ width: "33.33vw", height: "80px", color: "#fff" }}>
          <div>{followerUser.public_repos} - Repos</div>
        </Button>
      </div>
      {followerUser.bio && (
        <div className="bio">
          <div className="topic-bio">
            <div className="point"></div>
            <h1>BIO</h1>
          </div>
          <p>{followerUser.bio}</p>
        </div>
      )}
    </>
  );
};

export default Follower;
