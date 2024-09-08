import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { showToast } from "../Components/Toast/Toast";

const GoogleOAuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleGoogleOAuth = async () => {
      const query = new URLSearchParams(window.location.search);
      const code = query.get("code");

      if (code) {
        try {
          // Send the authorization code to the backend
          const response = await axios.get(
            `/api/auth/google/callback?code=${code}`
          );

          if (response.data) {
            // Save user data to local storage
            localStorage.setItem("userData", JSON.stringify(response.data));
            showToast("Google Sign-In Successful!", "success");

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

  return <div>Signing in with Google...</div>;
};

export default GoogleOAuthCallback;
