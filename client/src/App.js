import "./App.css";

import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Home from "./Components/Tabs/Home/Home.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      {/* <Routes>
        <Route path="/" element={Home} />
      </Routes> */}
    </div>
  );
}

export default App;
