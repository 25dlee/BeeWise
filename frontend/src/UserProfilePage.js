

import React, { useState } from 'react';

const PageWithDropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative', background: 'white' }}>
      {/* ---------- Other Original Elements ---------- */}
      
      <div
        style={{
          width: 122,
          height: 122,
          left: 28,
          top: 62,
          position: 'absolute',
          background: '#EADDFF',
          borderRadius: 100,
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            width: 85.96,
            height: 78.18,
            left: 18.02,
            top: 30.5,
            position: 'absolute',
            background: '#4F378A',
          }}
        />
      </div>
      <div
        style={{
          left: 175,
          top: 83,
          position: 'absolute',
          color: 'black',
          fontSize: 40,
          fontFamily: 'Old Standard TT',
          fontWeight: '400',
          wordWrap: 'break-word',
        }}
      >
        Honey <br /> Beemerten
      </div>

      {/* ---------- Badges Dropdown & History Section ---------- */}
      {/*
        We group the “Badges” header, all dropdown content, and the “History” label into one container.
        This container is absolutely positioned at the original coordinates (left:27, top:228).
        Inside, when the dropdown is closed (maxHeight: 0), only the “Badges” header and “History” label appear,
        with “History” immediately below “Badges.” When open the container expands to reveal:
          • A full‑width divider (originally at top:272)
          • “Tree Hugger” text (originally at left:125, top:303)
          • A short divider line (originally width:328 at left:51)
          • “Hot Topics” text (originally at left:125, top:390)
          • A second short divider line (originally width:328 at left:48)
          • “Basketball Fan” text (originally at left:125, top:483)
          • A full‑width divider (originally at top:544)
        This expanded content pushes the “History” label down.
      */}
      <div style={{ position: 'absolute', left: 27, top: 228, width: 430 }}>
        {/* Badges Header – click to toggle */}
        <div
          onClick={() => setDropdownOpen(!dropdownOpen)}
          style={{
            color: 'black',
            fontSize: 32,
            fontFamily: 'Old Standard TT',
            fontWeight: '400',
            wordWrap: 'break-word',
            cursor: 'pointer',
            padding: '5px 0',
          }}
        >
          Badges
        </div>

        {/* Dropdown Content – note the use of a CSS transition on max-height */}
        <div
          style={{
            overflow: 'hidden',
            transition: 'max-height 0.3s ease',
            maxHeight: dropdownOpen ? '300px' : '0',
          }}
        >
          {/* Full‑width divider line (mimics original at top:272) */}
          <div
            style={{
              border: '1px solid black',
              width: '375px',
              margin: '10px 0',
            }}
          />

          {/* "Tree Hugger" */}
          <div
            style={{
              marginLeft: '98px', // (125 - 27 = 98)
              padding: '5px 0',
              color: 'black',
              fontSize: 24,
              fontFamily: 'Open Sans',
              fontWeight: '400',
              wordWrap: 'break-word',
            }}
          >
            Tree Hugger
          </div>

          {/* First short divider (mimics original at left:51 => marginLeft:24) */}
          <div
            style={{
              border: '1px solid black',
              width: '328px',
              marginLeft: '24px', // (51 - 27 = 24)
              margin: '5px 0',
            }}
          />

          {/* "Hot Topics" */}
          <div
            style={{
              marginLeft: '98px',
              padding: '5px 0',
              color: 'black',
              fontSize: 24,
              fontFamily: 'Open Sans',
              fontWeight: '400',
              wordWrap: 'break-word',
            }}
          >
            Hot Topics
          </div>

          {/* Second short divider (mimics original at left:48 => marginLeft:21) */}
          <div
            style={{
              border: '1px solid black',
              width: '328px',
              marginLeft: '21px', // (48 - 27 = 21)
              margin: '5px 0',
            }}
          />

          {/* "Basketball Fan" */}
          <div
            style={{
              marginLeft: '98px',
              padding: '5px 0',
              color: 'black',
              fontSize: 24,
              fontFamily: 'Open Sans',
              fontWeight: '400',
              wordWrap: 'break-word',
            }}
          >
            Basketball Fan
          </div>

          {/* Full‑width divider line (mimics original at top:544) */}
          <div
            style={{
              border: '1px solid black',
              width: '375px',
              margin: '10px 0',
            }}
          />
        </div>

        {/* History Label – its vertical position is pushed down when the dropdown is open */}
        <div
          style={{
            color: 'black',
            fontSize: 32,
            fontFamily: 'Old Standard TT',
            fontWeight: '400',
            wordWrap: 'break-word',
            padding: '5px 0',
          }}
        >
          History
        </div>
      </div>

      {/* ---------- Other Original Elements (unchanged) ---------- */}
      <div
        style={{
          width: 48,
          height: 48,
          left: 352,
          top: 220,
          position: 'absolute',
        }}
      >
        <div
          style={{
            width: 24,
            height: 12,
            left: 12,
            top: 18,
            position: 'absolute',
            border: '4px solid #1E1E1E',
          }}
        />
      </div>
      <div
        style={{
          width: 375,
          height: 0,
          left: 25,
          top: 609,
          position: 'absolute',
          border: '1px solid black',
        }}
      />
      <div
        style={{
          width: 48,
          height: 48,
          left: 352,
          top: 555,
          position: 'absolute',
        }}
      >
        <div
          style={{
            width: 24,
            height: 12,
            left: 12,
            top: 18,
            position: 'absolute',
            border: '4px solid #1E1E1E',
          }}
        />
      </div>
    </div>
  );
};

export default PageWithDropdown;

