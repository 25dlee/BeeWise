// src/NewHome.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

function NewHome() {
  // Define three different orderings of our topics:
  const topicsPopular = [
    "Trump Tariffs",
    "AI-Mega Deal",
    "Facebook Content Policy",
    "Border Crisis",
    "Climate Change",
    "Abortion Rights",
  ];

  const topicsTrending = [
    "AI-Mega Deal",
    "Border Crisis",
    "Abortion Rights",
    "Trump Tariffs",
    "Facebook Content Policy",
    "Climate Change",
  ];

  const topicsRecent = [
    "Facebook Content Policy",
    "Climate Change",
    "Trump Tariffs",
    "Abortion Rights",
    "AI-Mega Deal",
    "Border Crisis",
  ];

  // Start with "popular" as the default ordering
  const [topics, setTopics] = useState(topicsPopular);

  // Handlers for changing the order
  const showPopular = () => setTopics(topicsPopular);
  const showTrending = () => setTopics(topicsTrending);
  const showRecent = () => setTopics(topicsRecent);

  // We want a 2x3 grid of clickable frames
  // Only the "Trump Tariffs" frame should link to Home.js
  // The others do nothing for now.
  //
  // We'll style them in a simple way for demonstration.
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#FAFAFA",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "1rem",
      }}
    >
      {/* Top button row (Popular / Trending / Recent) */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          marginBottom: "1rem",
        }}
      >
        <button onClick={showPopular}>Popular</button>
        <button onClick={showTrending}>Trending</button>
        <button onClick={showRecent}>Recent</button>
      </div>

      {/* 2x3 grid of topic frames */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr", // 2 columns
          gap: "1rem",
          width: "80%",
          maxWidth: "600px",
        }}
      >
        {topics.map((topic, index) => {
          // If it's "Trump Tariffs", we link to /home
          if (topic === "Trump Tariffs") {
            return (
              <Link
                key={index}
                to="/home"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  border: "1px solid #ccc",
                  backgroundColor: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100px",
                  borderRadius: "8px",
                  fontWeight: "bold",
                }}
              >
                {topic}
              </Link>
            );
          } else {
            // Otherwise, just a button that does nothing for now
            return (
              <div
                key={index}
                style={{
                  border: "1px solid #ccc",
                  backgroundColor: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100px",
                  borderRadius: "8px",
                  fontWeight: "bold",
                }}
              >
                {topic}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default NewHome;
