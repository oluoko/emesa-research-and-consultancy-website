import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const RegisterScreen = () => {
  const { register } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    // You might want to add some validation here before calling register
    if (email !== confirmEmail) {
      alert("Emails do not match!");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    register({ name, email, password });
  };

  return (
    <div className="contacts-form form max-w-md mx-auto my-5 p-10 border rounded-lg shadow-lg bg-black flex flex-col items-center text-white">
      <h4 className="mb-8 text-2xl text-orange-500">REGISTER AN ACCOUNT</h4>
      <form onSubmit={submitHandler} className="flex flex-col items-center">
        {[
          ["name", "text", "Your Name", setName],
          ["email", "email", "Your Email", setEmail],
          ["confirmEmail", "email", "Confirm Your Email", setConfirmEmail],
          ["password", "password", "Enter New Password", setPassword],
          [
            "confirmPassword",
            "password",
            "Confirm Your New Password",
            setConfirmPassword,
          ],
        ].map(([id, type, placeholder, setInput]) => (
          <input
            key={id}
            type={type}
            id={id}
            className="font-bold mb-4 text-xl shadow appearance-none border rounded w-full py-3 px-3 text-gray-600 bg-inherit leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
            placeholder={placeholder}
            onChange={(e) => setInput(e.target.value)}
          />
        ))}

        <div className="m-2">
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox" required />
            <span className="ml-2 text-white">
              Agree with statements in{" "}
              <a className="text-blue-500 hover:text-orange-500" href="">
                Terms of Service
              </a>
            </span>
          </label>
        </div>

        <button
          type="submit"
          className="button font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full text-xl"
        >
          Register
        </button>

        <p className="mt-5 text-lg md:text-xl">
          Already have an account?{" "}
          <Link className="text-blue-500 hover:text-orange-500" to="/login">
            Log in
          </Link>
        </p>
        <button
          type="button"
          className="button mt-4"
          onClick={() => (window.location.href = "/api/users/google")}
        >
          Sign Up with Google
        </button>
      </form>
    </div>
  );
};

export default RegisterScreen;
