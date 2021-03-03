import "./style.css";
import { useRepos } from "../../Providers/Repos";
import { useHistory } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const Repos = () => {
  const { reposUser } = useRepos();
  const history = useHistory();
  const back = () => {
    history.push("/user");
  };
  return (
    <>
      <button className="back" onClick={back}>
        <ArrowBackIcon />
      </button>
      <div className="header-repos">
        {reposUser.map((item, index) => {
          return (
            <div className="repos">
              <div className="data" key={index}>
                <div className="topic-name">
                  <div className="point"></div>
                  <div className="name">
                    <h3>{item.name}</h3>
                    <h5>Descrição: {item.description}</h5>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Repos;
