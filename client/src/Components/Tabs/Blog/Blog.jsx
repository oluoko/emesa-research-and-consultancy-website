import React from "react";
import "./Blog.css";
import Navbar from "../../Navbar/Navbar";

const Blog = () => {
  return (
    <div className="screen-container">
      <Navbar screen="blog" />
      <h1>Blog</h1>
      <p>Welcome to the Blog page!</p>
    </div>
  );
};

export default Blog;
