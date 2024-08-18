import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Quill editor's styling

const PostBlog = () => {
  const [content, setContent] = useState("");

  const handlePublish = () => {
    const userConfirmed = window.confirm(
      "Are you sure you want to publish the blog?"
    );
    if (userConfirmed) {
      // Handle the publish action (e.g., send content to the server)
      alert("Blog published successfully!");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Edit Blog Post</h1>
      <ReactQuill
        value={content}
        onChange={setContent}
        placeholder="Write your blog here..."
        className="mb-4"
        modules={{
          toolbar: [
            [{ header: "1" }, { header: "2" }, { font: [] }],
            [{ size: [] }],
            ["bold", "italic", "underline", "strike"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link", "image", "video"],
            ["clean"],
          ],
        }}
        formats={[
          "header",
          "font",
          "size",
          "bold",
          "italic",
          "underline",
          "strike",
          "list",
          "bullet",
          "indent",
          "link",
          "image",
          "video",
        ]}
      />
      <button
        onClick={handlePublish}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full sm:w-auto mx-auto block"
      >
        Publish
      </button>
    </div>
  );
};

export default PostBlog;
