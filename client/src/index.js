import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Blog from "./Components/Tabs/Blog/Blog.jsx";
import Careers from "./Components/Tabs/Careers/Careers.jsx";
import DrEmelda from "./Components/Dr. Emelda/DrEmelda.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Dr-Emelda" element={<DrEmelda />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
