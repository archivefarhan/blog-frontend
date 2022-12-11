import axios from "axios";
import { useState, useEffect } from "react";
import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import { Modal } from "./Modal";

export function Home() {
  const [posts, setPosts] = useState([]);
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);

  const handleIndexPosts = () => {
    axios.get("http://localhost:3000/posts").then((response) => {
      setPosts(response.data);
    });
  };

  const handleShowPost = () => {
    setIsPostsShowVisible(true);
  };

  const handleHidePost = () => {
    setIsPostsShowVisible(false);
  };

  useEffect(handleIndexPosts, []);

  return (
    <div>
      <PostsNew />
      <PostsIndex posts={posts} onSelectPost={handleShowPost} />
      <Modal show={isPostsShowVisible} onClose={handleHidePost}>
        <p>Watch Out!</p>
      </Modal>
    </div>
  );
}
