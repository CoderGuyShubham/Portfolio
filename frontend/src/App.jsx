import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import DarkMode from "./utilities/DarkMode";


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
    
  );
};

export default App;
