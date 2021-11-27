import React from "react";
import "./NavBar.css";
import wallpaper1 from "./wallpaper.jpg";
import wallpaper2 from "./wallpaper2.jpg";
import wallpaper3 from "./person1.png";
import { Link } from "react-router-dom";

export default function NavBar() {
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
          <li className="topListItem">
            {" "}
            <Link className="link" to="/">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            {" "}
            <Link className="link" to="/">
              CONTICT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="topListItem">
            {" "}
            <Link className="link" to="/login">
              LOGIN
            </Link>
          </li>
        </ul>
      </div>
      <div className="navRight">
        <img className="topImg" src={wallpaper1} alt="" />
        {/* <i className="topSearchIcon fas fa-search"></i> */}
      </div>
    </div>
  );
}
