import React from 'react';
import { Link } from 'react-router-dom';

function MissionsPage() {
  const missions = [
    {
      title: "Bee Aware",
      description: "Read your first article!",
    },
    {
      title: "Hive of Knowledge",
      description: "Explore two articles from opposing viewpoints!",
    },
    {
      title: "The Swarm of Opinions",
      description: "Read all the articles from a module.",
    },
  ];

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative', background: 'white' }}>
      <h2 style={{ position: 'absolute', left: 65, top: 197 }}>Missions</h2>

      {/* Missions List */}
      {missions.map((mission, index) => (
        <div 
          key={index} 
          style={{ 
            position: 'absolute', 
            left: 50, 
            top: 270 + index * 120, 
            width: '80%', 
            padding: index === 0 ? '10px' : '0', 
            background: index === 0 ? '#FFD700' : 'transparent', 
            borderRadius: index === 0 ? '10px' : '0' 
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ fontSize: 18, fontWeight: '600' }}>{mission.title}</span>
            {index === 0 && (
              <span 
                style={{ 
                  background: 'green', 
                  color: 'white', 
                  fontSize: 12, 
                  fontWeight: 'bold', 
                  padding: '5px 10px', 
                  borderRadius: '12px', 
                  marginLeft: '10px' 
                }}
              >
                Completed
              </span>
            )}
          </div>
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