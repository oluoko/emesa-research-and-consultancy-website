import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Blog from "./Screens/HomeScreen/Blog/Blog.jsx";
import Careers from "./Screens/HomeScreen/Careers/Careers.jsx";
import DrEmelda from "./Screens/Dr.EmeldaScreen/DrEmelda.jsx";
import "./index.css";
import LoginScreen from "./Screens/LoginScreen/LoginScreen.jsx";
import RegisterScreen from "./Screens/RegisterScreen/RegisterScreen.jsx";
import AttacheeApplicationScreen from "./Screens/AttacheeApplication/AttacheeApplicationScreen.jsx";
import ProfileScreen from "./Screens/ProfileScreen/ProfileScreen.jsx";
// import AdminRoute from "./Components/AdminRoute.jsx";
// import PrivateRoute from "./Components/PrivateRoute.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/careers" element={<Careers />} />
        <Route path="/Dr-Emelda" element={<DrEmelda />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        {/* <Route path="" element={<PrivateRoute />}> */}
        <Route
          path="/attachee-application"
          element={<AttacheeApplicationScreen />}
        />
        <Route path="/profile" element={<ProfileScreen />} />
        {/* </Route>
        <Route path="" element={<AdminRoute />}> */}

        {/* </Route> */}
      </Routes>
    </Router>
  </React.StrictMode>
);
