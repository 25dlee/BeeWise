// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewHome from "./NewHome"; // New landing page
import MissionsPage from "./MissionsPage";
import Navbar from "./Navbar";
import "./App.css";
import News from "./News";
import SocialPage from "./SocialPage";
import UserProfilePage from "./UserProfilePage"
import TopBar from "./TopBar"

// 1) Import the ScoreProvider
import { ScoreProvider } from "./ScoreContext";

function App() {
  return (
    // 2) Wrap the Router (and everything else) in ScoreProvider
    <ScoreProvider>
      <Router>
        <TopBar />
        <Navbar />
        <div>
          <Routes>
            {/* Our new landing page */}
            <Route path="/" element={<NewHome />} />
            <Route path="/missions" element={<MissionsPage />} />
            <Route path="/social" element={<SocialPage />} />
            <Route path="/news" element={<News />} />
            <Route path="/profile" element={<UserProfilePage />} />

          </Routes>
        </div>
      </Router>
    </ScoreProvider>
  );
}

export default App;