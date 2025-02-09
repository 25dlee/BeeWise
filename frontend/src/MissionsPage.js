// src/SecondPage.js
import React from 'react';
import { Link } from 'react-router-dom';

function MissionsPage() {
  return (
    <div style={{width: '100%', height: '100%', position: 'relative', background: 'white'}}>
      <div style={{width: 393, height: 852, left: 0, top: 0, position: 'absolute', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
        <img style={{width: 473, height: 932}} src="https://via.placeholder.com/473x932" alt="Placeholder" />
      </div>
      <div style={{width: 122, height: 122, left: 42, top: 46, position: 'absolute', background: '#EADDFF', borderRadius: 100, overflow: 'hidden'}}>
        <div style={{width: 85.96, height: 78.18, left: 18.02, top: 30.50, position: 'absolute', background: '#4F378A'}}></div>
      </div>
      <div style={{left: 65, top: 197, position: 'absolute', color: 'black', fontSize: 32, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Missions</div>
      <div style={{left: 192, top: 87, position: 'absolute', color: 'black', fontSize: 32, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Jane Doe</div>
      <div style={{width: 348, height: 59, left: 23, top: 770, position: 'absolute', background: '#D9D9D9', borderRadius: 10}} />
      <div style={{left: 212, top: 188, position: 'absolute'}}>
        <div style={{left: 48, top: 4, position: 'absolute', color: 'black', fontSize: 32, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Badges</div>
        <div style={{width: 48, height: 48, left: 0, top: 0, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
          <div style={{width: 28, height: 44, border: '4px #1E1E1E solid'}}></div>
        </div>
      </div>
      <div style={{width: 48, height: 48, left: 60, top: 776, position: 'absolute'}}>
        <div style={{width: 36, height: 40, left: 6, top: 4, position: 'absolute', border: '4px #1E1E1E solid'}}></div>
      </div>
      <div style={{width: 48, height: 48, left: 178, top: 776, position: 'absolute'}}>
        <div style={{width: 40, height: 40, left: 4, top: 4, position: 'absolute', border: '4px #1E1E1E solid'}}></div>
      </div>
      <div style={{width: 48, height: 48, left: 296, top: 776, position: 'absolute'}}>
        <div style={{width: 32, height: 36, left: 8, top: 6, position: 'absolute', border: '4px #1E1E1E solid'}}></div>
      </div>
      <div style={{left: 109, top: 277, position: 'absolute', color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Tree Hugger</div>
      <div style={{left: 109, top: 358, position: 'absolute', color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Tree Hugger</div>
      <div style={{left: 109, top: 466, position: 'absolute', color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Basketball Winner</div>
      <div style={{width: 48, height: 48, left: 38, top: 266, position: 'absolute'}}>
        <div style={{width: 40, height: 40, left: 4, top: 4, position: 'absolute', border: '4px #1E1E1E solid'}}></div>
      </div>
      <div style={{width: 48, height: 48, left: 36, top: 457, position: 'absolute'}}>
        <div style={{width: 40, height: 40, left: 4, top: 4, position: 'absolute', border: '4px #1E1E1E solid'}}></div>
      </div>
      <div style={{width: 355, height: 0, left: 19, top: 251, position: 'absolute', border: '1px black solid'}}></div>
      <div style={{width: 80, height: 80, left: 22, top: 337, position: 'absolute'}}>
        <div style={{width: 66.67, height: 66.67, left: 6.67, top: 6.67, position: 'absolute', border: '4px #1E1E1E solid'}}></div>
      </div>
      <div style={{width: 355, height: 0, left: 14, top: 334, position: 'absolute', border: '1px black solid'}}></div>
      <div style={{width: 48, height: 48, left: 40, top: 353, position: 'absolute'}}>
        <div style={{width: 42, height: 40, left: 4, top: 2, position: 'absolute', border: '4px #1E1E1E solid'}}></div>
      </div>
      <div style={{width: 355, height: 0, left: 9, top: 417, position: 'absolute', border: '1px black solid'}}></div>

      {/*
        Clickable "bottom right" area to go BACK to Home:
        Use a <Link /> from 'react-router-dom' to navigate to "/"
      */}
      <div
        style={{
          width: 48,
          height: 48,
          position: 'absolute',
          bottom: 20,
          right: 20,
          background: '#ccc',
          borderRadius: '50%',
          textAlign: 'center',
          lineHeight: '48px',
          cursor: 'pointer'
        }}
      >
        {/* We can make the entire div a clickable link */}
        <Link to="/" style={{textDecoration: 'none', color: 'black', display: 'block', width: '100%', height: '100%'}}>
          Home
        </Link>
      </div>
    </div>
  );
}

export default MissionsPage;
