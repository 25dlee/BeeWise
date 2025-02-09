import React from "react";

const TopBar = () => {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#FFF27D", // Gold color for a "bee" theme
        padding: "30px",
        textAlign: "center",
        fontSize: "24px",
        fontWeight: "bold",
        color: "black",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000, // Ensures it stays above other elements
      }}
    >
      BeeWise 🐝
    </div>
  );
};

export default TopBar;
