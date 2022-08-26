import { useEffect, useState } from "react";
import { IReceivedPosts, retrievePosts } from "../state/api-call";
import Post from "./Post";
import "./Posts.css";

const Posts = () => {
  const [receivedPosts, setPosts] = useState<IReceivedPosts[] | undefined>();
  const [query, setQuery] = useState<string>("");
  const includesPost = (post: IReceivedPosts) =>
    post.title.toLowerCase().includes(query.toLowerCase()) && query !== "";

  useEffect(() => {
    retrievePosts().then((result) => setPosts(result.data));
  }, []);

  return (
    <div className="posts">
      <div className="search">
        <input
          type="text"
          className="searchBar"
          placeholder="Enter Post Title"
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>
      {receivedPosts &&
        receivedPosts
          .filter((post) => {
            return query === "" ? post : includesPost(post) && post;
          })
          .map((item) => <Post key={item.id} {...item} />)}
    </div>
  );
};

export default Posts;
