import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import BlogHomeScreen from "./Screens/HomeScreen/Blog/BlogHomeScreen.jsx";
import CareersHomeScreen from "./Screens/HomeScreen/Careers/CareersHomeScreen.jsx";
import DrEmelda from "./Screens/Dr.EmeldaScreen/DrEmelda.jsx";
import "./index.css";
import LoginScreen from "./Screens/LoginScreen/LoginScreen.jsx";
import RegisterScreen from "./Screens/RegisterScreen/RegisterScreen.jsx";
import AttacheeApplicationScreen from "./Screens/AttacheeApplication/AttacheeApplicationScreen.jsx";
import ProfileScreen from "./Screens/ProfileScreen/ProfileScreen.jsx";
import Dashboard from "./Screens/Admin/Dashboard.jsx";
import DashboardHome from "./Screens/Admin/DashboardHome.jsx";
import UploadPictures from "./Screens/Admin/UploadPictures.jsx";
import Graphs from "./Screens/Admin/Graphs.jsx";
import EmployeesList from "./Screens/Admin/EmployeesList.jsx";
import BlogListScreen from "./Screens/Admin/BlogListScreen.jsx";
import UserListScreen from "./Screens/Admin/UserListScreen.jsx";
import Blog from "./Screens/HomeScreen/Blog/Blog.jsx";
import PostBlog from "./Screens/HomeScreen/Blog/PostBlog.jsx";
// import AdminRoute from "./Components/AdminRoute.jsx";
// import PrivateRoute from "./Components/PrivateRoute.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blogs" element={<BlogHomeScreen />}></Route>
        <Route path="/careers" element={<CareersHomeScreen />} />
        <Route path="/Dr-Emelda" element={<DrEmelda />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        {/* <Route path="" element={<PrivateRoute />}> */}
        <Route
          path="/attachee-application"
          element={<AttacheeApplicationScreen />}
        />
        <Route path="/blogs/:id" element={<Blog />} />
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/post-blog" element={<PostBlog />} />
        {/* </Route>
        <Route path="" element={<AdminRoute />}> */}
        <Route path="/admin-dashboard" element={<Dashboard />}>
          <Route
            index={true}
            path="/admin-dashboard"
            element={<DashboardHome />}
          />
          <Route path="/admin-dashboard/graphs" element={<Graphs />} />
          <Route path="/admin-dashboard/profile" element={<ProfileScreen />} />
          <Route
            path="/admin-dashboard/update-pictures"
            element={<UploadPictures />}
          />
          <Route
            path="/admin-dashboard/employees"
            element={<EmployeesList />}
          />
          <Route path="/admin-dashboard/blogs" element={<BlogListScreen />} />
          <Route
            path="/admin-dashboard/user-profiles"
            element={<UserListScreen />}
          />
        </Route>
        {/* </Route> */}
      </Routes>
    </Router>
  </React.StrictMode>
);
