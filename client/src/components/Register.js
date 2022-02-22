import React from "react";
import "./login.css";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "./authContext";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signup } = useAuth();
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
      const data = await signup(email, password);
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
              id="login"
              className="fadeIn second"
              name="login"
              onChange={changeEmail}
              placeholder="login"
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
            {/* <input
              type="text"
              id="password"
              className="fadeIn third"
              name="login"
              placeholder=" confirm password"
            /> */}
            <input type="submit" className="fadeIn fourth" value="Log In" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
