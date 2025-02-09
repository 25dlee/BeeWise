// UserProfilePage.js
import React, { useContext } from "react";
import { ScoreContext } from "./ScoreContext"; // Import your ScoreContext here

function UserProfilePage() {
  // Grab the list of friends from context
  const { friends } = useContext(ScoreContext);
  // Find the current user (named "You") or fallback to 0 points
  const currentUser = friends.find((friend) => friend.name === "You") || { points: 0 };

  return (
    // Outer container to center the content vertically/horizontally
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Inner container for absolute positioning */}
      <div style={{ position: "relative", width: 430, height: 700 }}>

        {/* Profile Picture Container (circular) */}
        <div
          style={{
            width: 122,
            height: 122,
            position: "absolute",
            top: 60,
            left: 28,
            background: "#FFF27D",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Default profile icon (SVG silhouette) */}
          <div style={{ width: 80, height: 80 }}>
            <svg
              viewBox="0 0 24 24"
              width="80"
              height="80"
              fill="#FFF"
              style={{
                borderRadius: "50%",
                backgroundColor: "#888",
              }}
            >
              <path d="M12,12a5,5,0,1,0-5-5A5,5,0,0,0,12,12Zm0,2c-2.3,0-8,1.2-8,3.5V20H20V17.5C20,15.2,14.3,14,12,14Z" />
            </svg>
          </div>
        </div>

        {/* Profile Name */}
        <div
          style={{
            position: "absolute",
            top: 80,
            left: 175,
            color: "black",
            fontSize: 40,
            fontFamily: "Old Standard TT",
            fontWeight: "400",
            wordWrap: "break-word",
          }}
        >
          Honey
          <br />
          Beemerten
        </div>

        {/* Current User Points (from context) */}
        <div
          style={{
            position: "absolute",
            top: 180,
            left: 180,
            color: "black",
            fontSize: 22,
            fontFamily: "Old Standard TT",
            fontWeight: "400",
            wordWrap: "break-word",
            width: 200,
          }}
        >
          {currentUser.points} points <br />
          {currentUser.points/5} articles read
        </div>

        {/* "Badges" Title */}
        <div
          style={{
            position: "absolute",
            top: 240,
            left: 28,
            color: "black",
            fontSize: 32,
            fontFamily: "Old Standard TT",
            fontWeight: "400",
            wordWrap: "break-word",
          }}
        >
          Badges
        </div>

        {/* Divider line below "Badges" */}
        <div
          style={{
            position: "absolute",
            top: 285,
            left: 27,
            width: 375,
            height: 0,
            border: "1px black solid",
          }}
        ></div>

        {/* Single Badge: "Bee Aware" with a green check */}
        <div
          style={{
            position: "absolute",
            top: 320,
            left: 28,
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <div
            style={{
              color: "black",
              fontSize: 24,
              fontFamily: "Open Sans",
              fontWeight: "400",
            }}
          >
            Bee Aware
          </div>
          <div style={{ color: "green", fontSize: "24px" }}>&#10003;</div>
        </div>

        {/* Everything below badges is just white space */}
      </div>
    </div>
  );
}

export default UserProfilePage;
