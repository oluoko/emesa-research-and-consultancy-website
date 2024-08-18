import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Back = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    localStorage.setItem("lastPage", location.pathname);
  }, [location]);
  return (
    <button
      onClick={() => navigate(-1)}
      className="button fixed top-2 left-2 font-bold py-2 px-4 rounded text-xl focus:outline-none focus:shadow-outline"
    >
      Back
    </button>
  );
};

export default Back;
