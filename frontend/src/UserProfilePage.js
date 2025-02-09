
// import React, { useState } from 'react';

// const UserProfilePage = () => {
//   const [isOpen, setIsOpen] = useState(false);

// // function UserProfilePage() {
//   return (
//     <div
//       style={{
//         width: '100%',
//         background: 'white',
//         border: '1px solid #ccc',
//         fontFamily: 'sans-serif'
//       }}
//     >
//       {/* Header/Handle */}
//       <div
//         onClick={() => setIsOpen(!isOpen)}
//         style={{
//           background: '#FFF27D',
//           height: '68px',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           cursor: 'pointer',
//           userSelect: 'none'
//         }}
//       >
//         <strong>{isOpen ? 'Close' : 'Open'} Dropdown</strong>
//       </div>

//       {/* Collapsible Content */}
//       <div
//         style={{
//           overflow: 'hidden',
//           transition: 'max-height 0.3s ease',
//           maxHeight: isOpen ? '1500px' : '0'
//         }}
//       >
//         <div style={{ padding: '20px' }}>
//           {/* Row of icons (previously absolute positioned elements) */}
//           <div
//             style={{
//               display: 'flex',
//               flexWrap: 'wrap',
//               alignItems: 'center',
//               gap: '10px',
//               marginBottom: '20px'
//             }}
//           >
//             {/* Icon 1 */}
//             <div style={{ width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//               <div style={{ width: '32px', height: '36px', border: '4px solid #FF8C00' }}></div>
//             </div>
//             {/* Icon 2 */}
//             <div style={{ width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//               <div
//                 style={{
//                   width: '40.33px',
//                   height: '40.33px',
//                   background: '#FF8C00'
//                 }}
//               ></div>
//             </div>
//             {/* Icon 3 */}
//             <div style={{ width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//               <div style={{ width: '32px', height: '40px', border: '4px solid #FF8C00' }}></div>
//             </div>
//             {/* Icon 4 */}
//             <div style={{ width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//               <div style={{ width: '36px', height: '40px', border: '4px solid #FF8C00' }}></div>
//             </div>
//             {/* Icon 5 */}
//             <div
//               style={{
//                 width: '56px',
//                 height: '56px',
//                 borderRadius: '8px',
//                 border: '3px solid rgba(255, 152, 0, 0.51)',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center'
//               }}
//             >
//               {/* (You could add an inner element here if desired) */}
//             </div>
//           </div>

//           {/* Profile Badge Section */}
//           <div style={{ textAlign: 'center', marginBottom: '20px' }}>
//             <div
//               style={{
//                 width: '122px',
//                 height: '122px',
//                 background: '#EADDFF',
//                 borderRadius: '50%',
//                 overflow: 'hidden',
//                 margin: '0 auto',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center'
//               }}
//             >
//               <div style={{ width: '86px', height: '78px', background: '#4F378A' }}></div>
//             </div>
//             <div
//               style={{
//                 fontSize: '40px',
//                 fontFamily: 'Old Standard TT',
//                 marginTop: '10px',
//                 lineHeight: '1.2'
//               }}
//             >
//               Honey <br /> Beemerten
//             </div>
//           </div>

//           {/* Labels Section */}
//           <div style={{ textAlign: 'center', fontSize: '24px', fontFamily: 'Open Sans', marginBottom: '20px' }}>
//             <div>Tree Hugger</div>
//             <div>Hot Topics</div>
//             <div>Basketball Fan</div>
//           </div>

//           {/* Sections with Dividers */}
//           <div style={{ textAlign: 'center', marginBottom: '20px' }}>
//             <div
//               style={{
//                 fontSize: '32px',
//                 fontFamily: 'Old Standard TT',
//                 marginBottom: '10px'
//               }}
//             >
//               Badges
//             </div>
//             <hr style={{ width: '90%', margin: '10px auto' }} />
//             <div
//               style={{
//                 fontSize: '32px',
//                 fontFamily: 'Old Standard TT',
//                 marginTop: '10px'
//               }}
//             >
//               History
//             </div>
//             <hr style={{ width: '90%', margin: '10px auto' }} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserProfilePage;



// import React, { useState } from 'react';

// const UserProfilePage = () => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   return (
//     <div style={{ width: '100%', height: '100%', position: 'relative', background: 'white' }}>
//       {/* Original elements unchanged */}
//       <div
//         style={{
//           width: 430,
//           height: 68,
//           left: 0,
//           top: 864,
//           position: 'absolute',
//           background: '#FFF27D',
//         }}
//       />
//       <div style={{ width: 48, height: 48, left: 335, top: 874, position: 'absolute' }}>
//         <div
//           style={{
//             width: 32,
//             height: 36,
//             left: 8,
//             top: 6,
//             position: 'absolute',
//             border: '4px #FF8C00 solid',
//           }}
//         ></div>
//       </div>
//       <div style={{ width: 44, height: 44, left: 241, top: 878, position: 'absolute' }}>
//         <div
//           style={{
//             width: 40.33,
//             height: 40.33,
//             left: 1.83,
//             top: 1.83,
//             position: 'absolute',
//             background: '#FF8C00',
//           }}
//         ></div>
//       </div>
//       <div style={{ width: 48, height: 48, left: 143, top: 875, position: 'absolute' }}>
//         <div
//           style={{
//             width: 32,
//             height: 40,
//             left: 8,
//             top: 4,
//             position: 'absolute',
//             border: '4px #FF8C00 solid',
//           }}
//         ></div>
//       </div>
//       <div style={{ width: 48, height: 48, left: 45, top: 874, position: 'absolute' }}>
//         <div
//           style={{
//             width: 36,
//             height: 40,
//             left: 6,
//             top: 4,
//             position: 'absolute',
//             border: '4px #FF8C00 solid',
//           }}
//         ></div>
//       </div>
//       <div
//         style={{
//           width: 56,
//           height: 56,
//           left: 331,
//           top: 870,
//           position: 'absolute',
//           borderRadius: 8,
//           border: '3px rgba(255, 152, 0, 0.51) solid',
//         }}
//       />
//       <div
//         style={{
//           width: 122,
//           height: 122,
//           left: 28,
//           top: 62,
//           position: 'absolute',
//           background: '#EADDFF',
//           borderRadius: 100,
//           overflow: 'hidden',
//         }}
//       >
//         <div
//           style={{
//             width: 85.96,
//             height: 78.18,
//             left: 18.02,
//             top: 30.50,
//             position: 'absolute',
//             background: '#4F378A',
//           }}
//         ></div>
//       </div>
//       <div
//         style={{
//           left: 175,
//           top: 83,
//           position: 'absolute',
//           color: 'black',
//           fontSize: 40,
//           fontFamily: 'Old Standard TT',
//           fontWeight: '400',
//           wordWrap: 'break-word',
//         }}
//       >
//         Honey <br /> Beemerten
//       </div>

//       {/* 
//         Dropdown Section:
//         We wrap the “Badges” label and the three dropdown texts in a container.
//         The container is absolutely positioned at its original coordinates.
//         The texts no longer use absolute positioning. Instead, they are indented
//         (using marginLeft) to mimic the original left offset (125px vs. container's 27px).
//       */}
//       <div style={{ position: 'absolute', left: 27, top: 228 }}>
//         <div
//           onClick={() => setDropdownOpen(!dropdownOpen)}
//           style={{
//             color: 'black',
//             fontSize: 32,
//             fontFamily: 'Old Standard TT',
//             fontWeight: '400',
//             wordWrap: 'break-word',
//             cursor: 'pointer',
//           }}
//         >
//           Badges
//         </div>
//         <div
//           style={{
//             overflow: 'hidden',
//             transition: 'max-height 0.3s ease',
//             maxHeight: dropdownOpen ? '200px' : '0',
//           }}
//         >
//           <div
//             style={{
//               marginLeft: '98px', // 125 - 27 = 98 to match original left value
//               marginTop: '10px',
//               color: 'black',
//               fontSize: 24,
//               fontFamily: 'Open Sans',
//               fontWeight: '400',
//               wordWrap: 'break-word',
//             }}
//           >
//             Tree Hugger
//           </div>
//           <div
//             style={{
//               marginLeft: '98px',
//               marginTop: '10px',
//               color: 'black',
//               fontSize: 24,
//               fontFamily: 'Open Sans',
//               fontWeight: '400',
//               wordWrap: 'break-word',
//             }}
//           >
//             Hot Topics
//           </div>
//           <div
//             style={{
//               marginLeft: '98px',
//               marginTop: '10px',
//               color: 'black',
//               fontSize: 24,
//               fontFamily: 'Open Sans',
//               fontWeight: '400',
//               wordWrap: 'break-word',
//             }}
//           >
//             Basketball Fan
//           </div>
//         </div>
//       </div>

//       {/* Other elements left as originally placed */}
//       <div
//         style={{
//           width: 375,
//           height: 0,
//           left: 27,
//           top: 272,
//           position: 'absolute',
//           border: '1px black solid',
//         }}
//       ></div>
//       <div
//         style={{
//           width: 328,
//           height: 0,
//           left: 51,
//           top: 363,
//           position: 'absolute',
//           border: '1px black solid',
//         }}
//       ></div>
//       <div
//         style={{
//           width: 328,
//           height: 0,
//           left: 48,
//           top: 453,
//           position: 'absolute',
//           border: '1px black solid',
//         }}
//       ></div>
//       <div
//         style={{
//           left: 28,
//           top: 563,
//           position: 'absolute',
//           color: 'black',
//           fontSize: 32,
//           fontFamily: 'Old Standard TT',
//           fontWeight: '400',
//           wordWrap: 'break-word',
//         }}
//       >
//         History
//       </div>
//       <div
//         style={{
//           width: 375,
//           height: 0,
//           left: 27,
//           top: 544,
//           position: 'absolute',
//           border: '1px black solid',
//         }}
//       ></div>
//       <div style={{ width: 48, height: 48, left: 352, top: 220, position: 'absolute' }}>
//         <div
//           style={{
//             width: 24,
//             height: 12,
//             left: 12,
//             top: 18,
//             position: 'absolute',
//             border: '4px #1E1E1E solid',
//           }}
//         ></div>
//       </div>
//       <div
//         style={{
//           width: 375,
//           height: 0,
//           left: 25,
//           top: 609,
//           position: 'absolute',
//           border: '1px black solid',
//         }}
//       ></div>
//       <div style={{ width: 48, height: 48, left: 352, top: 555, position: 'absolute' }}>
//         <div
//           style={{
//             width: 24,
//             height: 12,
//             left: 12,
//             top: 18,
//             position: 'absolute',
//             border: '4px #1E1E1E solid',
//           }}
//         ></div>
//       </div>
//     </div>
//   );
// };

// export default UserProfilePage;



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

