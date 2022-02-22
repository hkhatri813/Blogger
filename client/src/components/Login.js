import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "./authContext";
import "./login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      const data = await login(email, password);
      localStorage.setItem("auth_token", data.user.ya);
      navigate("/", { replace: true });
    } catch {
      setError("Email or Password is Incorrect");
    }
  }
  return (
    <div>
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="email"
              className="fadeIn second"
              name="email"
              placeholder="login"
              onChange={changeEmail}
              required
              value={email}
            />
            <input
              type="text"
              id="password"
              className="fadeIn third"
              name="login"
              placeholder="password"
              onChange={changePassword}
              value={password}
            />
            <input type="submit" className="fadeIn fourth" value="Log In" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
