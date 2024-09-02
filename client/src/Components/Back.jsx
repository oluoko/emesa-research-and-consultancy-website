import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Back = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userData = localStorage.getItem("userData");

  useEffect(() => {
    localStorage.setItem("lastPage", location.pathname);
  }, [location]);

  const handleBack = () => {
    // Check if the lastPage is not login or register and user is logged in
    if (
      userData &&
      location.pathname !== "/login" &&
      location.pathname !== "/register"
    ) {
      navigate(-1);
    } else {
      navigate("/"); // Redirect to home if user is not logged in
    }
  };

  return (
    <button
      onClick={handleBack}
      className="button fixed top-2 left-2 font-bold py-2 px-4 rounded text-xl focus:outline-none focus:shadow-outline"
    >
      Back
    </button>
  );
};

export default Back;
