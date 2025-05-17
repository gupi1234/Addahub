import { Link } from "react-router-dom";
import { Users } from "../../../DummyData";
import CloseFriend from "../closeFriend/CloseFriend";
import "./sidebar.css";
import {
  RssFeed as RssFeedIcon,
  School as SchoolIcon,
  Event as EventIcon,
  Work as WorkIcon,
  HelpOutline as HelpOutlineIcon,
  Bookmark as BookmarkIcon,
  Groups as GroupsIcon,
  OndemandVideo as OndemandVideoIcon,
  Chat as ChatIcon,
} from "@mui/icons-material";

const sidebarItems = [
  { icon: <RssFeedIcon />, label: "Feed", link: "/" },
  { icon: <ChatIcon />, label: "Chats", link: "*" },
  { icon: <OndemandVideoIcon />, label: "Videos", link: "*" },
  { icon: <GroupsIcon />, label: "Group", link: "*" },
  { icon: <BookmarkIcon />, label: "Bookmarks", link: "*" },
  { icon: <HelpOutlineIcon />, label: "Questions", link: "*" },
  { icon: <WorkIcon />, label: "Jobs", link: "*" },
  { icon: <EventIcon />, label: "Events", link: "*" },
  { icon: <SchoolIcon />, label: "Courses", link: "*" },
];
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <ul className="sidebar-list">
          {sidebarItems.map((item, index) => (
            <Link
              style={{ textDecoration: "none", color: "#343b42" }}
              to={item.link}
              key={index}
              className="sidebar-link"
            >
              <li className="sidebar-listitem" key={index}>
                <span className="sidebar-icon">{item.icon}</span>
                <span className="sidebar-listitem-text">{item.label}</span>
              </li>
            </Link>
          ))}
        </ul>
        <button className="sidebar-button">Show More</button>
        <hr className="sidebar-hr" />
        <ul className="siderbar-friendList">
          {Users.map((user) => (
            <CloseFriend key={user.id} user={user} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
