import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Toast, { showToast } from "../Components/Toast/Toast";

const GoogleOAuthCallback = () => {
  const API_URL = "http://localhost:5000/api";
  const navigate = useNavigate();

  useEffect(() => {
    const handleGoogleOAuth = async () => {
      const query = new URLSearchParams(window.location.search);
      const code = query.get("code");

      setTimeout(() => {
        if (!code) {
          showToast("Google Sign-In Failed!", "error");
          navigate("/login");
        }
      }, 1500);

      if (code) {
        try {
          // Send the authorization code to the backend
          const response = await axios.post(`${API_URL}/auth/google/callback`, {
            code: code,
          });

          if (response.data) {
            // Save user data to local storage
            localStorage.setItem("userData", JSON.stringify(response.data));

            setTimeout(() => {
              showToast("Google Sign-In Successful!", "success");
            }, 1500);

            // Get the original redirect URL
            const redirectAfterLogin =
              localStorage.getItem("redirectAfterLogin") || "/";

            // Clear the stored redirect URL
            localStorage.removeItem("redirectAfterLogin");

            // Redirect to the original URL after successful login
            navigate(redirectAfterLogin);
          }
        } catch (error) {
          console.error("Error during Google OAuth:", error);
          const errorMessage =
            error?.response?.data?.message ||
            "Error during Google OAuth, please try again.";
          console.log(errorMessage);
          setTimeout(() => {
            showToast(errorMessage, "error");
          }, 1500);
        }
      }
    };

    handleGoogleOAuth();
  }, [navigate]);

  return (
    <div className="w-screen h-screen bg-slate-300 flex flex-col justify-center items-center text-3xl md:text-7xl font-black">
      <Toast />
      Signing in with Google...
    </div>
  );
};

export default GoogleOAuthCallback;
