/* eslint-disable */

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "./Post";
import { fetchPosts } from "../redux/actions/post";
import Loader from "./Loader";

const PostsList = () => {
  const listPost = useSelector((state) => state.posts);
  const { posts, loading, error } = listPost;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-5 py-8">
      <div className="flex flex-wrap justify-center gap-8">
        {error && <p>{error}</p>}
        {loading ? (
          <Loader />
        ) : posts?.length > 0 ? (
          posts.map((post) => (
            <div
              key={post?._id}
              className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
            >
              <Post post={post} />
            </div>
          ))
        ) : (
          <p>Blog not found!</p>
        )}
      </div>
    </div>
  );
};

export default PostsList;
