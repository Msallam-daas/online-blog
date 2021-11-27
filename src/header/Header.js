import React from "react";
import "./Header.css";
import wallpaper2 from "./wallpaper2.jpg";
export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        {/* <span className="headerTitleSm">Architectural Design</span> */}
      </div>
      <img className="headerImg" src={wallpaper2} alt="" />
    </div>
  );
}
