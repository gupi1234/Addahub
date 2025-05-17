import React from "react";

import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import RightBar from "../../components/rightbar/rightBar";
import "./home.css";

export default function Home() {
  return (
    <>
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <RightBar />
      </div>
    </>
  );
}
