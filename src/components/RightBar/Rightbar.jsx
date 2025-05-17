import "./rightbar.css";
import { Users } from "../../../DummyData";
import Online from "../Online/Online";

const RightBar = ({ profile }) => {
  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src="/src/assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Bikram Debnath</b> and <b>3 other friends</b> have a birthday
            today
          </span>
        </div>
        <img src="/src/assets/adamazon.webp" alt="add" className="rightbarAd" />
        <h4 className="rightbarTitle">Online friends</h4>
        <ul className="onlineFriendList">
          {Users.map((user) => (
            <Online key={user.id} user={user} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightBar = () => {
    return (
      <>
        <h4 className="RightbarTitle">User Information</h4>
        <div className="rightbarinfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Kolkata</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">India</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>

        <h4 className="RightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          {Users.slice(1, 10).map((user) => (
            <div className="rightbarFollowing" key={user.id}>
              <img
                src={user.profilePicture}
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="FollowingName">{user.username}</span>
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  );
};

export default RightBar;
