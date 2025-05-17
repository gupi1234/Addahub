import React from "react";
import "./topbar.css";
import { Chat, Notifications, Person, Search } from "@mui/icons-material";
import HomeIcon from "@mui/icons-material/Home";
import ViewTimelineIcon from "@mui/icons-material/ViewTimeline";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/">
          <span className="logo">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1041/1041916.png "
              alt=""
              style={{ height: "26px" }}
            />
            <span className="logo-adda">Adda</span>
            <span className="logo-hub">Hub</span>
          </span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            type="text"
            placeholder="Search for friend, post, or video"
            className="search-input"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbar-links">
          <HomeIcon className="topbar-link" />
          <ViewTimelineIcon className="topbar-link" />
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <Link to="/profile">
          <img
            src="/src/assets/person/profile.jpg"
            alt=""
            className="topbarImg"
          />
        </Link>
      </div>
    </div>
  );
};

export default Topbar;
