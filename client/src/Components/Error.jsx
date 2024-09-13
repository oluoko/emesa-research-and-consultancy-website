import { Link } from "react-router-dom";

const Error = ({
  code = "404", // Default code
  message = "Page not found.", // Default message
  name = "Error", // Default error name
  response = "Something went wrong.", // Default response
  status = "error", // Default status
}) => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-6xl font-bold text-red-500 mb-4">{code}</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        {name} - {status}
      </h2>
      <p className="text-lg text-gray-600 mb-8">{message}</p>
      <p className="text-gray-500 italic mb-8">{response}</p>
      <Link
        to="/"
        className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default Error;
