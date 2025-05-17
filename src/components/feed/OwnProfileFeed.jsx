import { useSelector } from "react-redux";
import Post from "../../components/post/Post";

const Feed = () => {
  const posts = useSelector((state) => state.ownProfile.posts);

  return (
    <div className="feed">
      {posts.map((post) => (
        <Post key={post.date} post={post} />
      ))}
    </div>
  );
};

export default Feed;
