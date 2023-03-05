import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import BasicRegister from "./pages/p1-basic-register";
import AdvancedRegister from "./pages/p2-advanced-register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/basic-register" element={<BasicRegister />} />
      <Route path="/advanced-register" element={<AdvancedRegister />} />
    </Routes>
  );
}

function Home() {
  return (
    <div className="home">
      <h1>Links</h1>
      <nav>
        <Link to="/basic-register">Basic Register</Link>
        <Link to="/advanced-register">Advanced Register</Link>
      </nav>
    </div>
  );
}

export default App;
