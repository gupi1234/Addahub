import "./post.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Users } from "../../../DummyData";
import { useState, useEffect } from "react";

function Post({ post }) {
  const user = Users.find((u) => u.id === post.userId);

  const [like, setLike] = useState(post.like);
  const [isliked, setIsLiked] = useState(false);
  const [timeAgo, setTimeAgo] = useState(post.date);

  const likeHandler = () => {
    setLike(isliked ? like - 1 : like + 1);
    setIsLiked(!isliked);
  };

  useEffect(() => {
    const updateTimestamp = () => {
      const diff = new Date() - new Date(post.timestamp);
      const seconds = Math.floor(diff / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);

      if (days > 0) {
        setTimeAgo(`${days} day${days > 1 ? "s" : ""} ago`);
      } else if (hours > 0) {
        setTimeAgo(`${hours} hour${hours > 1 ? "s" : ""} ago`);
      } else if (minutes > 0) {
        setTimeAgo(`${minutes} minute${minutes > 1 ? "s" : ""} ago`);
      } else {
        setTimeAgo("Just now");
      }
    };

    updateTimestamp();

    const interval = setInterval(updateTimestamp, 60000);

    return () => clearInterval(interval);
  }, [post.timestamp]);

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src={user.profilePicture} alt="" className="postProfileImg" />
            <span className="postUserName">{user.username}</span>
            <span className="postDate">{timeAgo}</span>
            <span style={{ marginLeft: "10px" }}>
              {post.feeling ? (
                <>
                  {post.feeling === "Happy" && "😄"}
                  {post.feeling === "Sad" && "😢"}
                  {post.feeling === "Angry" && "😡"}
                  {post.feeling === "Love" && "😍"}
                  {post.feeling === "Surprised" && "😱"} Feeling {post.feeling}
                </>
              ) : null}
              {post.location ? ` at ${post.location}` : null}
            </span>
          </div>
          <div className="portTopRight">
            <MoreHorizIcon />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img src={post.photo} alt="" className="postimg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src="/src/assets/like.png"
              onClick={likeHandler}
              alt=""
            />
            <img
              className="likeIcon"
              src="/src/assets/heart.png"
              onClick={likeHandler}
              alt=""
            />
            <span className="PostlikeCounter">{like} people liked it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
