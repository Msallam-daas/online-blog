import React from "react";
import "./post.css";
import pic1 from "./1.jfif";
import pic2 from "./wallpaper2.jpg";
import { Link } from "react-router-dom";
export default function Post() {
  return (
    <div className="post">
      <img className="postImg" src={pic2} alt="" />
      <div className="postInfo">
        <div className="postCat">
          <span className="postCat">PAST</span>
          <span className="postCat">FUTURE</span>
        </div>
        <span className="postTitle">
          {" "}
          <Link className="link" to="/single">
            Lorem Ipsum is simply dummy .
          </Link>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDes">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. Lorem Ipsum is simply dummy text of the printing
        and typesetting industry. Lorem Ipsum has been the industry's standard
        dummy text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has survived
        not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged.
      </p>
    </div>
  );
}
