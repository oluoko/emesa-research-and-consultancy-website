import React, { useEffect, useState } from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { fetchSinglePost, deletePost } from "../redux/actions/post";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import EditPostForm from "./EditPostForm";
import Loader from "./Loader";

const PostDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const currentPosts = useSelector((state) => state.posts);
  const { currentPost, loading, error } = currentPosts;
  const [editMode, setEditMode] = useState(false);

  const openEditMode = () => {
    setEditMode(true);
  };

  const closeEditMode = () => {
    setEditMode(false);
  };

  const convertRelativeTime = (date) => {
    return moment(date).format("LL");
  };

  useEffect(() => {
    dispatch(fetchSinglePost(id));
  }, [dispatch, id]);

  const removePost = () => {
    try {
      if (
        window.confirm(`Are you sure? You can't undo this action afterwards.`)
      ) {
        dispatch(deletePost(currentPost?._id));
        toast.success("Blog successfully removed!");
        setTimeout(() => {
          history.push("/posts");
        }, 500);
      }
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          {error && <p>{error}</p>}
          {editMode ? (
            <EditPostForm post={currentPost} closeEditMode={closeEditMode} />
          ) : (
            <div className="max-w-3xl mx-auto flex items-center justify-center px-5">
              <div className="w-full py-5">
                <div className="py-6">
                  <h1 className="text-4xl font-bold text-gray-600">
                    {currentPost?.title}
                  </h1>
                  <h2 className="text-sm italic mt-2 font-normal text-gray-400">
                    {currentPost?.subtitle}
                  </h2>

                  <div className="my-6">
                    <div className="flex items-center">
                      <div className="flex items-center">
                        <img
                          className="h-10 rounded-full"
                          src="https://source.unsplash.com/random/48x48"
                          alt="Avatar"
                        />
                        <div className="flex flex-col ml-3">
                          <a className="font-bold text-blue-600">
                            {currentPost?.author}
                          </a>
                          <span className="text-sm text-gray-600">
                            {convertRelativeTime(currentPost?.createdAt)}
                          </span>
                        </div>
                      </div>

                      <div className="ml-auto flex space-x-3">
                        <button
                          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                          onClick={openEditMode}
                        >
                          Edit
                        </button>
                        <button
                          className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
                          onClick={removePost}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>

                  <figure className="mb-8">
                    <img
                      className="w-full rounded-md"
                      src={
                        currentPost?.image || "https://loremflickr.com/1280/720"
                      }
                      alt={currentPost?.tag}
                    />
                    <figcaption className="text-center text-gray-500 text-sm mt-2">
                      Photo by Lopez Robin on Unsplash
                    </figcaption>
                  </figure>
                  <p className="mt-4 text-lg text-gray-400">
                    {currentPost?.content}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default PostDetails;
