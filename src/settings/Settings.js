import React from "react";
import "./Settings.css";
import Sidebar from "../sidebar/sidebar";
import Img1 from "./person.jpg";
export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img src={Img1} alt="" />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>{" "}
            </label>
            <input type="file" id="fileInput" style={{ display: " none" }} />
          </div>
          <label>Username</label>.
          <input type="text" placeholder="Safak" />
          <label>Email</label>
          <input type="email" placeholder="safak@gmail.com" />
          <label>Password</label>
          <input type="password" placeholder="Password" />
          <button className="settingsSubmitButton" type="submit">
            Update
          </button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
