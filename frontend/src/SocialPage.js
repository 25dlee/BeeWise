import React, { useState } from "react";
import "./SocialPage.css"; // Custom CSS for detailed styling

const initialFriends = [
  { id: 1, name: "BeeLover_01", points: 12 },
  { id: 2, name: "QueenBee_02", points: 10 },
  { id: 3, name: "HoneyHunter_03", points: 5 },
  { id: 4, name: "BuzzMaster_04", points: 2 },
  { id: 5, name: "You", points: 0 },
];

function SocialPage() {
  const [friends, setFriends] = useState(initialFriends);

  // Function to increment points, called externally by other app logic
  const incrementPoints = (id, pointsToAdd) => {
    setFriends((prevFriends) =>
      prevFriends
        .map((friend) =>
          friend.id === id
            ? { ...friend, points: friend.points + pointsToAdd }
            : friend
        )
        .sort((a, b) => b.points - a.points)
    );
  };

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
