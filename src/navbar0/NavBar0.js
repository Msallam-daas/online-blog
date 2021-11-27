import React from "react";
import "./NavBar0.css";
import { Link } from "react-router-dom";

export default function NavBar0() {
  return (
    <div className="Nav">
      <div className="navLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className="navCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
        </ul>
      </div>
      <div className="navRight">
        <ul className="topList">
          <li className="topListItem">
            {" "}
            <Link className="link" to="/login">
              LOGIN
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
