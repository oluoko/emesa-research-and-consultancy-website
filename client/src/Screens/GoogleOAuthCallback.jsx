import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
<<<<<<< HEAD
import Toast, { showToast } from "../Components/Toast/Toast";

const GoogleOAuthCallback = () => {
  const API_URL = "http://localhost:5000/api";
=======

const GoogleOAuthCallback = () => {
>>>>>>> 7d9628a (Emesa Research and Consultancy)
  const navigate = useNavigate();

  useEffect(() => {
    const handleGoogleOAuth = async () => {
      const query = new URLSearchParams(window.location.search);
      const code = query.get("code");

<<<<<<< HEAD
      setTimeout(() => {
        if (!code) {
          showToast("Google Sign-In Failed!", "error");
          navigate("/login");
        }
      }, 1500);

      if (code) {
        try {
          // Send the authorization code to the backend
          const response = await axios.post(
            `${API_URL}/auth/google/callback`,
            {
              code: code,
            },
            { timeout: 5000 }
          );

          if (response.data) {
            // Save user data to local storage
            localStorage.setItem("userData", JSON.stringify(response.data));
            localStorage.setItem("token", response.data.token);

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
=======
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
>>>>>>> 7d9628a (Emesa Research and Consultancy)
        }
      }
    };

    handleGoogleOAuth();
  }, [navigate]);

<<<<<<< HEAD
  return (
    <div className="w-screen h-screen bg-slate-300 flex flex-col justify-center items-center text-3xl md:text-7xl font-black">
      <Toast />
      Signing in with Google...
    </div>
  );
=======
  return <div>Signing in with Google...</div>;
>>>>>>> 7d9628a (Emesa Research and Consultancy)
};

export default GoogleOAuthCallback;
