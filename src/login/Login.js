import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Home from "../home/Home";
export default function Login() {
  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");

  const [flag, setFlag] = useState(false);

  const [home, setHome] = useState(true);

  function handleLogin(e) {
    e.preventDefault();
    let pass = localStorage
      .getItem("hardikSubmissionPassword")
      .replace(/"/g, "");
    let mail = localStorage.getItem("hardikSubmissionEmail").replace(/"/g, "");
    // .replace(/"/g,"") is used to remove the double quotes for the string

    if (!emaillog || !passwordlog) {
      setFlag(true);
      console.log("EMPTY");
    } else if (passwordlog !== pass || emaillog !== mail) {
      setFlag(true);
    } else {
      setHome(!home);
      setFlag(false);
    }
  }

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleLogin}>
        <label className="re">Email</label>
        <input
          className="loginInput"
          type="text"
          placeholder="Enter your email"
          onChange={(event) => setEmaillog(event.target.value)}
        />
        <label className="re">password</label>
        <input
          className="loginInput"
          type="text"
          placeholder="Enter your password"
          onChange={(event) => setPasswordlog(event.target.value)}
        />
        <button type="submit" className="loginButton">
          Login
        </button>
        <button className="loginRegisterButton">
          <Link className="link" to="/register">
            REGISTER
          </Link>
        </button>
      </form>
    </div>
  );
}
