// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import MissionsPage from "./MissionsPage";
import TopicDetailPage from "./TopicDetailPage";
import UserProfilePage from "./UserProfilePage";
import HomePage from "./HomePage";
import SocialPage from "./SocialPage";
import Navbar from "./Navbar";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/missions" element={<MissionsPage />} />
          {/* TODO: make username a dynamic parameter in the path*/}
          <Route path="/social" element={<SocialPage />} />
          {/* TODO: make username a dynamic parameter in the path*/}
          <Route path="/profile" element={<UserProfilePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;