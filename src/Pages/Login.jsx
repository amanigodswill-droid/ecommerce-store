import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  function handleSubmit(event) {

    event.preventDefault();

    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    login();

    navigate("/checkout");

  }

  return (

    <div className="container">

      <h1 className="page-title">
        Login
      </h1>

      <form
        className="login-form"
        onSubmit={handleSubmit}
      >

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) =>
            setEmail(event.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) =>
            setPassword(event.target.value)
          }
        />

        <button className="btn">
          Login
        </button>

      </form>

    </div>

  );

}

export default Login;