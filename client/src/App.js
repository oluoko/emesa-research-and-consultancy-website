import "./App.css";

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Home from "./Components/Tabs/Home/Home.jsx";

import About from "./Components/Tabs/About/About.jsx";
import Services from "./Components/Tabs/Services/Services.jsx";
import Contacts from "./Components/Tabs/Contacts/Contacts.jsx";
import Blog from "./Components/Tabs/Blog/Blog.jsx";
import Careers from "./Components/Tabs/Careers/Careers.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </Router>
  );
}

export default App;
