import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showPost } from "../../store/Slice/postsSlice";
import Loader from "../loader/Loader";
import { ownPosts, Posts } from "../../../DummyData";

const Feed = () => {
  const location = useLocation();
  const path = location.pathname;

  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state) => state.ownProfile);

  useEffect(() => {
    dispatch(showPost());
  }, [dispatch, path]);

  const combinedProfilePosts = [...posts, ...ownPosts];

  const postFeed = Posts.map((post) => <Post key={post.id} post={post} />);
  const profileFeed = combinedProfilePosts.map((post) => (
    <Post key={post.id} post={post} />
  ));

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {loading ? (
          <Loader />
        ) : path === "/profile" ? (
          profileFeed.length > 0 ? (
            profileFeed
          ) : (
            <p>No posts found</p>
          )
        ) : postFeed.length > 0 ? (
          postFeed
        ) : (
          <p>No posts available</p>
        )}
      </div>
    </div>
  );
};

export default Feed;
