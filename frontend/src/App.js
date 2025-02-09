// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home"; // Old home
import NewHome from "./NewHome"; // New landing page
import MissionsPage from "./MissionsPage";
import TopicDetailPage from "./TopicDetailPage";
import Navbar from "./Navbar";
import "./App.css";
import CNNNews1 from "./CNNNews1";
import FoxNews1 from "./FoxNews1";
import APNews1 from "./APNews1";
import News from "./News";
import SocialPage from "./SocialPage";
import UserProfilePage from "./UserProfilePage"

// 1) Import the ScoreProvider
import { ScoreProvider } from "./ScoreContext";

function App() {
  return (
    // 2) Wrap the Router (and everything else) in ScoreProvider
    <ScoreProvider>
      <Router>
        <Navbar />
        <div>
          <Routes>
            {/* Our new landing page */}
            <Route path="/" element={<NewHome />} />

            {/* Old home page, now secondary */}
            <Route path="/home" element={<Home />} />

            <Route path="/missions" element={<MissionsPage />} />
            <Route path="/social" element={<SocialPage />} />
            <Route path="/news1-cnn" element={<CNNNews1 />} />
            <Route path="/news1-fox" element={<FoxNews1 />} />
            <Route path="/news1-ap" element={<APNews1 />} />
            <Route path="/news" element={<News />} />
            <Route path="/profile" element={<UserProfilePage />} />


            {/* Existing third page route */}
            <Route path="/topicdetail" element={<TopicDetailPage />} />
          </Routes>
        </div>
      </Router>
    </ScoreProvider>
  );
}

export default App;