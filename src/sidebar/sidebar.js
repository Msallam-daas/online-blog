import React from "react";
import "./sidebar.css";
import person from "./person.jpg";
import Person1 from "./person1.png";

export default function sidebar() {
  return (
    <div className="sideBar">
      <div className="sideBarItem">
        <span className="sideBarTitle">ABOUT ME</span>
        <img className="sideBarImg" src={Person1} alt="" />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged
        </p>
      </div>
      <div className="sideBarItem">
        <span className="sideBarTitle">GATEGORIES</span>
        <ul className="sideBarList">
          <li className="sideBarListItem">Frank Owen Gehry </li>
          <li className="sideBarListItem">Norman Foster </li>
          <li className="sideBarListItem">Zaha Hadid </li>
          <li className="sideBarListItem">Frank LIoyd Wright </li>
          <li className="sideBarListItem">Mies van der Rohe </li>
          <li className="sideBarListItem"> van der Rohe </li>
        </ul>
      </div>
      <div className="SideBarItem"></div>
      <span className="sideBarTitle">FOLLOW US</span>
      <div className="sideBarSocial">
        <i className="sideBarIcon fab fa-facebook-square"></i>
        <i className="sideBarIcon fab fa-instagram-square"></i>
        <i className="sideBarIcon fab fa-pinterest-square"></i>
        <i className="sideBarIcon fab fa-twitter-square"></i>
      </div>
    </div>
  );
}
