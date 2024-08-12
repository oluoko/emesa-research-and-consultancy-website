import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Screens/HomeScreen/Home/Home";
import About from "./Screens/HomeScreen/About/About";
import Services from "./Screens/HomeScreen/Services/Services";
import Contacts from "./Screens/HomeScreen/Contacts/Contacts";

const App = () => {
  return (
    <div className="App">
      <Navbar screen="home" />
      <Home />
      <About />
      <Services />
      <Contacts />
    </div>
  );
};

export default App;
