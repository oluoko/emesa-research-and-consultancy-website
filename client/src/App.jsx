import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Tabs/Home/Home";
// import About from "./Components/Tabs/About/About";
import Services from "./Components/Tabs/Services/Services";
import Contacts from "./Components/Tabs/Contacts/Contacts";

const App = () => {
  return (
    <div className="App">
      <Navbar screen="home" />
      <Home />
      {/* <About /> */}
      <Services />
      <Contacts />
    </div>
  );
};

export default App;
