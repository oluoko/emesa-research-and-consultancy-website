import "./App.css";

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Home from "./Components/Tabs/Home/Home.jsx";
import Ads from "./Components/Ads/Ads.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Home />
      <Ads />
      <Routes>
        <Route path="/" element={Home} />
      </Routes>
    </Router>
  );
}

export default App;
