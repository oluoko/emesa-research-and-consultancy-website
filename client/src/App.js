import "./App.css";

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Home from "./Components/Tabs/Home/Home.jsx";

import About from "./Components/Tabs/About/About.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Home />
      <About />
    </Router>
  );
}

export default App;
