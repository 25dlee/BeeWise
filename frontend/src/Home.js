// src/Home.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Adjust this to your actual S3 JSON URL
const S3_JSON_URL = "https://hackduke.s3.us-east-1.amazonaws.com/main_database/Trump+Tarrifs.json";

function Home() {
  // State for articles and any fetch errors
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  // Automatically fetch articles on mount (no button needed)
  useEffect(() => {
    (async function fetchArticles() {
      try {
        setError(null); // reset old errors
        const response = await fetch(S3_JSON_URL);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

        // Convert the S3 object structure to an array of articles
        // Example shape:
        // {
        //   "CNN": { title, content, url },
        //   "Fox": { ... },
        //   "AP":  { ... }
        // }
        const loadedArticles = [];
        for (let source in data) {
          if (Object.hasOwn(data, source)) {
            loadedArticles.push({
              source,
              title: data[source].title || "",
              content: data[source].content || "",
              url: data[source].url || "",
            });
          }
        }

        setArticles(loadedArticles);
      } catch (err) {
        setError(err.message);
      }
    })();
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        background: "white",
      }}
    >
      {/* 
        ======= YOUR ORIGINAL MARKUP (unchanged) ======= 
      */}
      <div
        style={{
          width: 393,
          height: 852,
          left: 0,
          top: 0,
          position: "absolute",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          display: "inline-flex",
        }}
      >
        <img
          style={{ width: 473, height: 932 }}
          src="https://via.placeholder.com/473x932"
          alt="Placeholder"
        />
      </div>
      <div
        style={{
          width: 40,
          height: 40,
          left: 20,
          top: 65,
          position: "absolute",
          background: "#EADDFF",
          borderRadius: 100,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: 28.18,
            height: 25.63,
            left: 5.91,
            top: 10,
            position: "absolute",
            background: "#4F378A",
          }}
        ></div>
      </div>
      <div style={{ width: 32.29, height: 40, left: 339, top: 65, position: "absolute" }}>
        <div
          style={{
            width: 32.29,
            height: 40,
            left: 0,
            top: 0,
            position: "absolute",
            background:
              "radial-gradient(66.65% 51.80% at 164.77% 109.46%, #FF9800 31%, #FF6D00 66%, #F44336 97%)",
          }}
        ></div>
        <div
          style={{
            width: 16.38,
            height: 26.01,
            left: 8.15,
            top: 13.99,
            position: "absolute",
            background:
              "radial-gradient(52.81% 42.95% at 50.04% 54.96%, #FFF176 21%, #FFF27D 33%, #FFF48F 49%, #FFF7AD 67%, #FFF9C4 79%, rgba(255, 248, 189, 0.80) 82%, rgba(255, 246, 171, 0.53) 86%, rgba(255, 243, 141, 0.21) 91%, rgba(255, 241, 118, 0) 94%)",
          }}
        ></div>
      </div>
      <div
        style={{
          left: 290,
          top: 66,
          position: "absolute",
          color: "black",
          fontSize: 32,
          fontFamily: "Inter",
          fontWeight: "400",
          wordWrap: "break-word",
        }}
      >
        24
      </div>
      <div
        style={{
          width: 197,
          height: 17,
          left: 83,
          top: 77,
          position: "absolute",
          background: "#D9D9D9",
          borderRadius: 10,
        }}
      />
      <div
        style={{
          width: 251,
          height: 37,
          left: 23,
          top: 119,
          position: "absolute",
        }}
      >
        <div
          style={{
            width: 251,
            height: 37,
            left: 0,
            top: 0,
            position: "absolute",
            background: "#D9D9D9",
            borderRadius: 10,
          }}
        />
        <div
          style={{
            width: 57.09,
            left: 39.86,
            top: 9,
            position: "absolute",
            color: "#757575",
            fontSize: 16,
            fontFamily: "Inter",
            fontWeight: "400",
            wordWrap: "break-word",
          }}
        >
          Search
        </div>
      </div>
      <div
        style={{
          width: 91,
          height: 37,
          left: 280,
          top: 119,
          position: "absolute",
        }}
      >
        <div
          style={{
            width: 91,
            height: 37,
            left: 0,
            top: 0,
            position: "absolute",
            background: "#D9D9D9",
            borderRadius: 10,
          }}
        />
        <div
          style={{
            left: 12,
            top: 9,
            position: "absolute",
            color: "#757575",
            fontSize: 16,
            fontFamily: "Inter",
            fontWeight: "400",
            wordWrap: "break-word",
          }}
        >
          Filter
        </div>
      </div>
      <div
        style={{
          width: 348,
          height: 98,
          left: 23,
          top: 295,
          position: "absolute",
        }}
      >
        <div
          style={{
            width: 348,
            height: 98,
            left: 0,
            top: 0,
            position: "absolute",
            background: "#FBE45B",
            borderRadius: 10,
          }}
        />
        <div
          style={{
            width: 108,
            left: 23,
            top: 25,
            position: "absolute",
            color: "black",
            fontSize: 24,
            fontFamily: "Inter",
            fontWeight: "400",
            wordWrap: "break-word",
          }}
        >
          Ethical AI
        </div>
        <div
          style={{
            width: 37,
            left: 23,
            top: 54,
            position: "absolute",
            color: "black",
            fontSize: 16,
            fontFamily: "Inter",
            fontWeight: "400",
            wordWrap: "break-word",
          }}
        >
          CNN
        </div>
        <div
          style={{
            width: 49,
            height: 48,
            left: 274,
            top: 24,
            position: "absolute",
          }}
        >
          <div
            style={{
              width: 40.83,
              height: 40,
              left: 4.08,
              top: 4,
              position: "absolute",
              border: "4px #1E1E1E solid",
            }}
          ></div>
        </div>
      </div>
      <div
        style={{
          width: 348,
          height: 98,
          left: 23,
          top: 413,
          position: "absolute",
        }}
      >
        <div
          style={{
            width: 348,
            height: 98,
            left: 0,
            top: 0,
            position: "absolute",
            background: "#2C7C94",
            borderRadius: 10,
          }}
        />
        <div
          style={{
            width: 108,
            left: 23,
            top: 25,
            position: "absolute",
            color: "black",
            fontSize: 24,
            fontFamily: "Inter",
            fontWeight: "400",
            wordWrap: "break-word",
          }}
        >
          Ethical AI
        </div>
        <div
          style={{
            width: 37,
            left: 23,
            top: 54,
            position: "absolute",
            color: "black",
            fontSize: 16,
            fontFamily: "Inter",
            fontWeight: "400",
            wordWrap: "break-word",
          }}
        >
          CNN
        </div>
        <div
          style={{
            width: 49,
            height: 48,
            left: 275,
            top: 25,
            position: "absolute",
          }}
        >
          <div
            style={{
              width: 40.83,
              height: 40,
              left: 4.08,
              top: 4,
              position: "absolute",
              border: "4px #1E1E1E solid",
            }}
          ></div>
        </div>
      </div>
      <div
        style={{
          width: 28,
          height: 28,
          left: 75,
          top: 71,
          position: "absolute",
          background: "#24B040",
          borderRadius: 9999,
        }}
      />
      <div
        style={{
          width: 348,
          height: 98,
          left: 23,
          top: 177,
          position: "absolute",
        }}
      >
        <div
          style={{
            width: 348,
            height: 98,
            left: 0,
            top: 0,
            position: "absolute",
            background: "#C4AA23",
            borderRadius: 10,
          }}
        />
        <div
          style={{
            width: 48,
            height: 48,
            left: 276,
            top: 24,
            position: "absolute",
          }}
        >
          <div
            style={{
              width: 40,
              height: 40,
              left: 4,
              top: 3.99,
              position: "absolute",
              border: "4px #1E1E1E solid",
            }}
          ></div>
        </div>
        <div
          style={{
            width: 108,
            left: 71,
            top: 25,
            position: "absolute",
            color: "black",
            fontSize: 24,
            fontFamily: "Inter",
            fontWeight: "400",
            wordWrap: "break-word",
          }}
        >
          Ethical AI
        </div>
        <div
          style={{
            width: 37,
            left: 71,
            top: 54,
            position: "absolute",
            color: "black",
            fontSize: 16,
            fontFamily: "Inter",
            fontWeight: "400",
            wordWrap: "break-word",
          }}
        >
          CNN
        </div>
        <div
          style={{
            width: 48,
            height: 48,
            left: 13,
            top: 24,
            position: "absolute",
          }}
        >
          <div
            style={{
              width: 36,
              height: 36,
              left: 6,
              top: 6,
              position: "absolute",
              border: "4px #1E1E1E solid",
            }}
          ></div>
        </div>
      </div>

      {/* 
        ======= NEW SECTION, PLACED MUCH LOWER ======= 
        Using absolute positioning with a large top value 
        so it won't be covered by other elements
      */}
      <div
        style={{
          position: "absolute",
          top: 1300,     // push far down to avoid overlap
          left: 20,
          width: "90%",
          padding: "1rem",
          backgroundColor: "#f9f9f9",
          border: "1px solid #ccc",
        }}
      >
        <h1>News Articles Analysis</h1>

        {/* Show error if fetch fails */}
        {error && <p style={{ color: "red" }}>Error: {error}</p>}

        {/* Show total article count */}
        <p>Total Articles: {articles.length}</p>

        {/* List out each article */}
        {articles.map((art, idx) => (
          <div
            key={idx}
            style={{
              marginBottom: "1rem",
              padding: "0.5rem",
              border: "1px solid #ddd",
            }}
          >
            <strong>Source:</strong> {art.source} <br />
            <strong>Title:</strong> {art.title} <br />
            {/* Optional snippet of content */}
            <strong>Content:</strong>{" "}
            {art.content.substring(0, 100)}...
            <br />
            {/* URL link if available */}
            {art.url && (
              <a href={art.url} target="_blank" rel="noreferrer">
                Read More
              </a>
            )}
          </div>
        ))}
      </div>

      {/* Bottom-right "Go" button (unchanged) */}
      <div
        style={{
          width: 48,
          height: 48,
          position: "absolute",
          bottom: 20,
          right: 20,
          background: "#ccc",
          borderRadius: "50%",
          textAlign: "center",
          lineHeight: "48px",
          cursor: "pointer",
          zIndex: 9999,
        }}
      >
        <Link
          to="/second"
          style={{
            textDecoration: "none",
            color: "black",
            display: "block",
            width: "100%",
            height: "100%",
          }}
        >
          Go
        </Link>
      </div>
    </div>
  );
}

export default Home;
