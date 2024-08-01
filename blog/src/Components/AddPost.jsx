import React, { useState } from "react";
import FileBase64 from "react-file-base64";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useForm, Controller } from "react-hook-form";

import { createPost } from "../redux/actions/post";

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

const AddPostForm = ({ isOpen, onClose }) => {
  const [file, setFile] = useState(null);

  const { register, errors, control, handleSubmit } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    try {
      dispatch(createPost({ ...data, image: file }));
      toast.success("Blog successfully added!");
      clearForm();
    } catch (error) {
      toast.error(error);
    }
  };

  const clearForm = () => {
    onClose();
    setFile(null);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-smoke-light flex">
      <div className="relative p-8 bg-white w-full max-w-md m-auto flex-col flex rounded-lg shadow-md">
        <h2 className="text-2xl mb-4">Add New Post</h2>
        <button onClick={onClose} className="absolute top-0 right-0 p-4">
          &times;
        </button>
        <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
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
            />
            {errors.title && (
              <p className="text-red-500 text-xs italic">
                {errors.title.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
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
            />
            {errors.subtitle && (
              <p className="text-red-500 text-xs italic">
                {errors.subtitle.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
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
            />
            {errors.author && (
              <p className="text-red-500 text-xs italic">
                {errors.author.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
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
              defaultValue={categories[0]}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
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

          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleSubmit(onSubmit)()}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPostForm;
