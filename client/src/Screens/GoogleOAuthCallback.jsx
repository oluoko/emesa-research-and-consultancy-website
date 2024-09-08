import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
            // Handle successful login/signup
            console.log("User Data:", response.data);
            // Redirect to home or dashboard after successful login
            navigate("/");
          }
        } catch (error) {
          console.error("Error during Google OAuth:", error);
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
