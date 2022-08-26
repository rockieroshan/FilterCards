import { IReceivedPosts } from "../state/api-call";
import "./Post.css";

const Post: React.FC<IReceivedPosts> = (receivedPosts) => {
  return (
    <div className="postWrapper">
      <div className="post">
        <div>User Id: {receivedPosts.userId}</div>
        <div>Title: {receivedPosts.title}</div>
        <div>Description: {receivedPosts.body}</div>
      </div>
    </div>
  );
};

export default Post;
