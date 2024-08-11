import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Blog from "./Components/Tabs/Blog/Blog.jsx";
import Careers from "./Components/Tabs/Careers/Careers.jsx";
import DrEmelda from "./Components/Dr. Emelda/DrEmelda.jsx";
import "./index.css";
import LoginScreen from "./Components/Screens/LoginScreen/LoginScreen.jsx";
import RegisterScreen from "./Components/Screens/RegisterScreen/RegisterScreen.jsx";
import AttacheeApplicationScreen from "./Components/Screens/AttacheeApplication/AttacheeApplicationScreen.jsx";

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
        <Route
          path="/attachee-application"
          element={<AttacheeApplicationScreen />}
        />
      </Routes>
    </Router>
  </React.StrictMode>
);
