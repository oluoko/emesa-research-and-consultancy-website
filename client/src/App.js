import "./App.css";

import React from "react";
import Home from "./Components/Tabs/Home/Home.jsx";

import About from "./Components/Tabs/About/About.jsx";
import Services from "./Components/Tabs/Services/Services.jsx";
import Contacts from "./Components/Tabs/Contacts/Contacts.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Services />
      <Contacts />
    </div>
  );
}

export default App;
