import React from "react";
import "./register.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Register() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);
  const [info, setInfo] = useState(true);
  function handleFormSubmit(e) {
    e.preventDefault();

    if (!username || !email || !password) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("hardikSubmissionEmail", JSON.stringify(email));
      localStorage.setItem(
        "hardikSubmissionPassword",
        JSON.stringify(password)
      );
      console.log("Saved in Local Storage");

      setLogin(!login);
    }
    function handleClick() {
      setLogin(!login);
    }
    function infoClick() {
      setInfo(!info);
    }
  }
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleFormSubmit}>
        <label className="re">Username</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your username"
          onChange={(event) => setUserName(event.target.value)}
        />
        <label className="re">Email</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <label className="re">password</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit" className="registerButton">
          Register
        </button>
        <button className="registerLoginButton">
          {" "}
          <Link className="link" to="/login">
            LOGIN
          </Link>
        </button>
      </form>
    </div>
  );
}
