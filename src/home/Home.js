import React from "react";
import Header from "../header/Header";
import Sidebar from "../sidebar/sidebar";
import Posts from "../posts/posts";
import "./Home.css";

export default function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </>
  );
}
