import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaRegCircle } from 'react-icons/fa';

function MissionsPage() {
  const [completedMissions, setCompletedMissions] = useState({});

  const toggleMission = (mission) => {
    setCompletedMissions((prev) => ({
      ...prev,
      [mission]: !prev[mission],
    }));
  };

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative', background: 'white' }}>
      <div style={{ width: 393, height: 852, left: 0, top: 0, position: 'absolute', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img style={{ width: 473, height: 932 }} src="https://via.placeholder.com/473x932" alt="Placeholder" />
      </div>
      <h2 style={{ position: 'absolute', left: 65, top: 197 }}>Missions</h2>
      
      {/* Missions List */}
      {[
  {
    "title": "Diverse Perspectives Explorer",
    "description": "Complete three lessons from different topics or viewpoints to gain a well-rounded understanding."
  },
  {
    "title": "Ethics Advocate",
    "description": "Engage in a discussion or complete a module on media literacy, earning points for exploring diverse perspectives."
  },
  {
    "title": "News Mastery Champion",
    "description": "Achieve a perfect score on an news challenge or quiz, demonstrating deep understanding."
  }
].map((mission, index) => (
        <div key={index} style={{ position: 'absolute', left: 50, top: 270 + index * 120, width: '80%' }}>
          <button 
            onClick={() => toggleMission(mission.title)}
            style={{
              background: 'none',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              fontSize: 18,
              fontWeight: '600'
            }}>
            {completedMissions[mission.title] ? <FaCheckCircle color="green" size={24} /> : <FaRegCircle size={24} />}
            <span style={{ marginLeft: 10 }}>{mission.title}</span>
          </button>
          <p style={{ fontSize: 14, color: '#666', marginTop: 5 }}>{mission.description}</p>
        </div>
      ))}
      
      {/* Navigation Link */}
      <div style={{ position: 'absolute', bottom: 20, right: 20 }}>
        <Link to="/" style={{ textDecoration: 'none', fontSize: 18, color: 'black' }}>Home</Link>
      </div>
    </div>
  );
}

export default MissionsPage;
