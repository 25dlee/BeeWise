// ScoreContext.js
import React, { createContext, useState } from 'react';

// Create the context
export const ScoreContext = createContext();

export const ScoreProvider = ({ children }) => {
  const [friends, setFriends] = useState([
    { id: 1, name: 'BeeLover_01', points: 4 },
    { id: 2, name: 'QueenBee_02', points: 3 },
    { id: 3, name: 'HoneyHunter_03', points: 2 },
    { id: 4, name: 'BuzzMaster_04', points: 1 },
    { id: 5, name: 'You',         points: 0 },
  ]);

  // General function to increment any friend by +10 (used by SocialPage)
  const incrementPoints = (id) => {
    setFriends((prevFriends) =>
      prevFriends
        .map((friend) =>
          friend.id === id ? { ...friend, points: friend.points + 10 } : friend
        )
        .sort((a, b) => b.points - a.points)
    );
  };

  // Specifically increment "You" by +10 (used by Home)
  const incrementYouPoints = () => {
    setFriends((prevFriends) =>
      prevFriends
        .map((friend) =>
          friend.name === 'You' ? { ...friend, points: friend.points + 5 } : friend
        )
        .sort((a, b) => b.points - a.points)
    );
  };

  return (
    <ScoreContext.Provider value={{ friends, incrementPoints, incrementYouPoints }}>
      {children}
    </ScoreContext.Provider>
  );
};
