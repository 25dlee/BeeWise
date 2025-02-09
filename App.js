// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";       // <-- new import
import ProductNavbar from "./ProductNavbar";
import "./App.css";

function App() {
  return (
    <Router>
      <ProductNavbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/second" element={<SecondPage />} />
          {/* New third page route */}
          <Route path="/third" element={<ThirdPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;