import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import BlogHomeScreen from "./Screens/HomeScreen/Blog/BlogHomeScreen.jsx";
import CareersHomeScreen from "./Screens/HomeScreen/Careers/CareersHomeScreen.jsx";
import DrEmelda from "./Screens/Dr.EmeldaScreen/DrEmelda.jsx";
import "./index.css";
import LoginScreen from "./Screens/LoginScreen.jsx";
import RegisterScreen from "./Screens/RegisterScreen.jsx";
import AttacheeApplicationScreen from "./Screens/AttacheeApplicationScreen.jsx";
import ProfileScreen from "./Screens/ProfileScreen.jsx";
import Dashboard from "./Screens/Admin/Dashboard.jsx";
import DashboardHome from "./Screens/Admin/DashboardHome.jsx";
import UploadPictures from "./Screens/Admin/UploadPictures.jsx";
import Graphs from "./Screens/Admin/Graphs.jsx";
import EmployeesList from "./Screens/Admin/EmployeesList.jsx";
import BlogListScreen from "./Screens/Admin/BlogListScreen.jsx";
import UserListScreen from "./Screens/Admin/UserListScreen.jsx";
import Blog from "./Screens/HomeScreen/Blog/Blog.jsx";
import PostBlog from "./Screens/HomeScreen/Blog/PostBlog.jsx";
import AdminRoute from "./Components/AdminRoute.jsx";
import PrivateRoute from "./Components/PrivateRoute.jsx";
import EmailVerificationScreen from "./Screens/EmailVerificationScreen.jsx";
import TermsOfService from "./Screens/TermsOfService.jsx";
import PPolicy from "./Screens/PPolicy.jsx";
import GoogleOAuthCallback from "./Screens/GoogleOAuthCallback.jsx";
<<<<<<< HEAD
import Error from "./Components/Error.jsx";
=======
>>>>>>> 7d9628a (Emesa Research and Consultancy)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blogs" element={<BlogHomeScreen />} />
        <Route path="/Dr-Emelda" element={<DrEmelda />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/error" element={<Error />} />
        <Route
          path="/verify-email/:token"
          element={<EmailVerificationScreen />}
        />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PPolicy />} />
        <Route path="/oauth" element={<GoogleOAuthCallback />} />
<<<<<<< HEAD

        {/* Private Routes */}
        <Route element={<PrivateRoute />}>
=======
        <Route path="" element={<PrivateRoute />}>
>>>>>>> 7d9628a (Emesa Research and Consultancy)
          <Route
            path="/attachee-application"
            element={<AttacheeApplicationScreen />}
          />
          <Route path="/careers" element={<CareersHomeScreen />} />
          <Route path="/blogs/:id" element={<Blog />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/post-blog" element={<PostBlog />} />
        </Route>

        {/* Admin Routes */}
        <Route element={<AdminRoute />}>
          <Route path="/admin-dashboard" element={<Dashboard />}>
            <Route index={true} element={<DashboardHome />} />
            <Route path="graphs" element={<Graphs />} />
            <Route path="profile" element={<ProfileScreen />} />
            <Route path="update-pictures" element={<UploadPictures />} />
            <Route path="employees" element={<EmployeesList />} />
            <Route path="blogs" element={<BlogListScreen />} />
            <Route path="user-profiles" element={<UserListScreen />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
