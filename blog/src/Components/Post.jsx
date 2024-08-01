import React from "react";
import moment from "moment";
import "moment/locale/en-gb";

const Post = ({ post }) => {
  const convertRelativeTime = (date) => {
    return moment(date).fromNow();
  };

  return (
    <>
      <img
        className="rounded-t-lg w-full h-64 object-cover"
        src={post?.image || "https://loremflickr.com/448/256"}
        alt={post?.tag}
      />

      <div className="p-6">
        <div>
          <span className="text-xs uppercase text-blue-600 cursor-pointer">
            {post.tag}
          </span>

          <a
            className="block text-gray-800 font-bold text-2xl hover:text-gray-500 hover:underline"
            href={`posts/${post._id}`}
          >
            {post.title}
          </a>
          <span className="mt-2 text-sm italic text-gray-500">
            {post.subtitle}
          </span>
          <p className="mt-4 text-sm text-gray-400">
            {post.content.substring(0, 225) + "..."}
          </p>
        </div>

        <div className="mt-4">
          <div className="flex items-center">
            <div className="flex items-center">
              <img
                className="h-10 rounded-full"
                src="https://source.unsplash.com/random/48x48"
                alt="Avatar"
              />
              <a className="mx-2 font-bold text-gray-700">{post.author}</a>
            </div>
            <div className="ml-auto">
              <span className="mx-1 text-sm text-gray-600">
                {convertRelativeTime(post.createdAt)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
