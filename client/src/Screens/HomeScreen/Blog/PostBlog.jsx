import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./editor.css";
import Back from "../../../Components/Back";

const PostBlog = () => {
  const [title, setTitle] = useState(
    () => localStorage.getItem("blogTitle") || ""
  );
  const [content, setContent] = useState(
    () => localStorage.getItem("blogDraft") || ""
  );

  useEffect(() => {
    const autoSave = setTimeout(() => {
      localStorage.setItem("blogDraft", content);
      localStorage.setItem("blogTitle", title);
    }, 1000); // Auto-save every 1 second

    return () => clearTimeout(autoSave); // Clear the timeout if the content changes before the save
  }, [content, title]);

  const handlePublish = () => {
    const userConfirmed = window.confirm(
      "Are you sure you want to publish the blog?"
    );
    if (userConfirmed) {
      // Handle the publish action (e.g., send content to the server)
      alert("Blog published successfully!");
      localStorage.removeItem("blogDraft");
      localStorage.removeItem("blogTitle");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent the default behavior of creating a new line
      setContent(content + "\n\n"); // Add a paragraph break (two line breaks)
    }
  };

  return (
    <div className="container mx-auto p-4 sm:p-8">
      <Back />
      <div className="max-w-4xl mx-auto mt-16">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="w-full text-3xl font-bold placeholder-gray-500 mb-4 border-b-2 focus:outline-none"
        />
        <ReactQuill
          value={content}
          onChange={setContent}
          onKeyDown={handleKeyDown}
          placeholder="Start writing your blog here..."
          className="text-lg placeholder-gray-500"
          modules={{
            toolbar: [
              [{ header: "1" }, { header: "2" }, { font: [] }],
              ["bold", "italic", "underline", "strike"],
              [{ list: "ordered" }, { list: "bullet" }],
              ["link", "image", "video"],
              ["blockquote", "code-block"],
              ["clean"],
            ],
          }}
          formats={[
            "header",
            "font",
            "bold",
            "italic",
            "underline",
            "strike",
            "list",
            "bullet",
            "link",
            "image",
            "video",
            "blockquote",
            "code-block",
          ]}
        />
        <div className="mt-8 flex justify-end">
          <button
            onClick={handlePublish}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded shadow-lg transition duration-200"
          >
            Publish
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostBlog;
