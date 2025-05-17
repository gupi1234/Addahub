import "./closeFriend.css";

const CloseFriend = ({ user }) => {
  return (
    <li className="siderbar-friend">
      <img src={user.profilePicture} alt="" className="sidebar-friendImg" />
      <span className="sidebar-friendName">{user.username}</span>
    </li>
  );
};

export default CloseFriend;
