import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import RightBar from "../../components/RightBar/rightBar";
import { ownProfileInfo } from "../../../DummyData";
import "./profile.css";

const Profile = () => {
  return (
    <>
      <div className="Profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src={ownProfileInfo[0].coverPicture}
                alt=""
                className="profileCoverImg"
              />
              <img
                src={ownProfileInfo[0].profilePicture}
                alt=""
                className="profileUserImg"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{ownProfileInfo[0].username}</h4>
              <span className="profileInfoDese">
                {ownProfileInfo[0].description}
              </span>
            </div>
          </div>
          <div className="profileRightBottom">
            <div className="profileRightBottomFeed">
              <Feed />
            </div>
            <div className="profileRightBottomRightbar">
              <RightBar profile={true} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
