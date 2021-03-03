import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { TextField, Button } from "@material-ui/core/";
import axios from "axios";
import { useData } from "../../Providers/Data";
import { useAuthentication } from "../../Providers/Authenticator";

const Home = () => {
  const { setAuthentication } = useAuthentication();
  const history = useHistory();

  const { setDataUser } = useData();

  const schema = yup.object().shape({
    user: yup.string().required("Campo obrigatório"),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = async (data) => {
    const response = await axios(`https://api.github.com/users/${data.user}`);
    setDataUser(response.data);
    setAuthentication(true);
    history.push("/user");
  };

  return (
    <div className="login-card">
      <img id="image-logo" src="github-logo-project.png" alt="" />
      <br />
      <br />
      <form onSubmit={handleSubmit(handleForm)}>
        <TextField
          variant="outlined"
          placeholder="Usuário"
          name="user"
          style={{
            backgroundColor: "#fff",
            width: "327px",
            height: " 50px",
            borderRadius: "10px",
          }}
          inputRef={register}
          error={!!errors.user}
          helperText={errors.user?.message}
        />
        <br />
        <br />
        <br />
        <Button
          type="subimit"
          style={{
            backgroundColor: "#fdda00",
            width: "327px",
            height: "50px",
            borderRadius: "10px",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          ENTRAR
          <ArrowForwardIcon />
        </Button>
      </form>
    </div>
  );
};

export default Home;
