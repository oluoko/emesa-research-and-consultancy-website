import React, { useState } from "react";
import FileBase64 from "react-file-base64";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useForm, Controller } from "react-hook-form";
import { updatePost } from "../redux/actions/post";

const categories = [
  "Frontend",
  "Backend",
  "Mobile",
  "React",
  "Vue",
  "JavaScript",
  "Fun",
  "Gaming",
];

const EditPostForm = ({ post, closeEditMode }) => {
  const [file, setFile] = useState(post?.image);
  const { register, errors, control, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    try {
      const updatedPost = {
        _id: post._id,
        ...data,
        image: file,
      };
      dispatch(updatePost(post._id, updatedPost));
      toast.success("Blog successfully updated!");
      setFile(null);
      closeEditMode();
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className="flex max-w-4xl mx-auto px-5 min-h-screen items-center justify-center">
      <div className="w-full px-10 py-5 bg-white dark:bg-gray-700 rounded-lg shadow-lg">
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold">Edit Post</h2>
        </div>
        <div className="my-4 text-left">
          <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label
                className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
                htmlFor="title"
              >
                Title
              </label>
              <input
                id="title"
                name="title"
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.title ? "border-red-500" : ""
                }`}
                ref={register({
                  required: {
                    value: true,
                    message: "This field is required.",
                  },
                })}
                defaultValue={post?.title}
              />
              {errors.title && (
                <p className="text-red-500 text-xs italic">
                  {errors.title.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
                htmlFor="subtitle"
              >
                Subtitle
              </label>
              <input
                id="subtitle"
                name="subtitle"
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.subtitle ? "border-red-500" : ""
                }`}
                ref={register({
                  required: {
                    value: true,
                    message: "This field is required.",
                  },
                })}
                defaultValue={post?.subtitle}
              />
              {errors.subtitle && (
                <p className="text-red-500 text-xs italic">
                  {errors.subtitle.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
                htmlFor="author"
              >
                Author
              </label>
              <input
                id="author"
                name="author"
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.author ? "border-red-500" : ""
                }`}
                ref={register({
                  required: {
                    value: true,
                    message: "This field is required.",
                  },
                })}
                defaultValue={post?.author}
              />
              {errors.author && (
                <p className="text-red-500 text-xs italic">
                  {errors.author.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
                htmlFor="tag"
              >
                Category
              </label>
              <Controller
                as={
                  <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    {categories.map((category, i) => (
                      <option key={i} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                }
                name="tag"
                control={control}
                defaultValue={post?.tag}
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
                htmlFor="content"
              >
                Content
              </label>
              <textarea
                id="content"
                name="content"
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.content ? "border-red-500" : ""
                }`}
                ref={register({
                  required: {
                    value: true,
                    message: "This field is required.",
                  },
                  minLength: {
                    message:
                      "Content must contain at least 50 characters or more.",
                    value: 50,
                  },
                })}
                defaultValue={post?.content}
              />
              {errors.content && (
                <p className="text-red-500 text-xs italic">
                  {errors.content.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <FileBase64
                multiple={false}
                onDone={({ base64 }) => setFile(base64)}
              />
            </div>

            <div className="mt-4 flex justify-end items-center">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                onClick={() => handleSubmit(onSubmit)()}
              >
                Update
              </button>
              <button
                type="button"
                onClick={closeEditMode}
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditPostForm;
