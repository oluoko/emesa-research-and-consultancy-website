import React from "react";

const RegisterScreen = () => {
  return (
    <div
      className="
"
    >
      <div className="contacts-form form max-w-md mx-auto my-10 p-5 border rounded-lg shadow-lg bg-black ">
        <h3>Contacts Form</h3>
        <form>
          <input
            type="text"
            id="name"
            className=" text-white text-sm font-bold mb-2 text-xl shadow appearance-none border rounded w-full py-2 px-3 text-gray-600 bg-inherit leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Your Name"
          />

          <input
            type="email"
            id="email"
            className="shadow appearance-none border rounded w-full  text-white text-xl text-sm font-bold mb-2 py-2 px-3 text-gray-600 bg-inherit leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Your Email"
          />

          <div className="m-2">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">
                I agree with all the statements in{" "}
                <a href="">Terms of Service</a>
              </span>
            </label>
          </div>
          <div className="m-2 flex justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Register
            </button>
            <div className="text-center mt-4 text-white flex flex-col justify-center items-center">
              <p>Hate Contact forms?</p>
              <p>
                <a
                  href="mailto:researchemesa@gmail.com"
                  className="text-sm text-blue-500 hover:underline"
                >
                  Our email
                </a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterScreen;
