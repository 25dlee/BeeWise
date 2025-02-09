// SocialPage.js
import React, { useContext } from "react";
import { ScoreContext } from "./ScoreContext";  // Adjust path as needed
import "./SocialPage.css";

function SocialPage() {
  // Instead of local state, use the context:
  const { friends, incrementPoints } = useContext(ScoreContext);

  return (
    <div className="social-page">
      <div className="leaderboard-container">
        <h1 className="leaderboard-title">Friends Leaderboard</h1>
        <div className="leaderboard">
          {friends.map((friend, index) => (
            <div
              key={friend.id}
              className={`leaderboard-item ${
                index === 0 ? "gold" : index === 1 ? "silver" : index === 2 ? "bronze" : ""
              }`}
            >
              <div className="rank">
                <div className="badge">
                  <span>{index + 1}</span>
                </div>
              </div>
              <div className="info">
                <p className="name">{friend.name}</p>
                <p className="points">{friend.points} points</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SocialPage;