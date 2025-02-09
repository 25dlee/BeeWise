// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import MissionsPage from "./MissionsPage";
import TopicDetailPage from "./TopicDetailPage";  
import Navbar from "./Navbar";
import "./App.css";
import CNNNews1 from "./CNNNews1";
import FoxNews1 from "./FoxNews1";
import APNews1 from "./APNews1";
import News from "./News";


function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/missions" element={<MissionsPage />} />
          <Route path="/news1-cnn" element={<CNNNews1 />} />
          <Route path="/news1-fox" element={<FoxNews1 />} />
          <Route path="/news1-ap" element={<APNews1 />} />
          <Route path="/news" element={<News />} />
          {/* New third page route */}
          <Route path="/topicdetail" element={<TopicDetailPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
