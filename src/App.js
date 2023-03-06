import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import Home from "./pages/home";
import BasicRegister from "./pages/p1-basic-register";
import AdvancedRegister from "./pages/p2-advanced-register";
import Pricing from "./pages/p3-pricing";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/basic-register" element={<BasicRegister />} />
      <Route path="/advanced-register" element={<AdvancedRegister />} />
      <Route path="/pricing" element={<Pricing />} />
    </Routes>
  );
}

export default App;
