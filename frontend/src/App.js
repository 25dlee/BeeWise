// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import MissionsPage from "./MissionsPage";
import TopicDetailPage from "./TopicDetailPage";       // <-- new import
import Navbar from "./Navbar";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/missions" element={<MissionsPage />} />
          {/* New third page route */}
          <Route path="/topicdetail" element={<TopicDetailPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;