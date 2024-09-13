import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Toast, { showToast } from "../Components/Toast/Toast";
import { set } from "mongoose";

const GoogleOAuthCallback = () => {
  const API_URL = "http://localhost:5000/api";
  const navigate = useNavigate();

  useEffect(() => {
    const handleGoogleOAuth = async () => {
      const query = new URLSearchParams(window.location.search);
      const code = query.get("code");
      console.log("Google OAuth code:", code);

      setTimeout(() => {
        if (!code) {
          showToast("Google Sign-In Failed!", "error");
          navigate("/login");
        }
      }, 5000);

      if (code) {
        try {
          // Send the authorization code to the backend
          const response = await axios.get(
            `${API_URL}/auth/google/callback?code=${code}`
          );

          if (response.data) {
            // Save user data to local storage
            localStorage.setItem("userData", JSON.stringify(response.data));

            console.log("Google OAuth response:", response.data);

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
          showToast(errorMessage, "error");
          // Handle error, maybe redirect to error page
          navigate("/error");
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
