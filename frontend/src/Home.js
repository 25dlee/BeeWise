import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const S3_JSON_URL = "https://hackduke.s3.us-east-1.amazonaws.com/main_database/Trump+Tarrifs.json";

function Home() {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async function fetchArticles() {
      try {
        setError(null);
        const response = await fetch(S3_JSON_URL);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        const loadedArticles = Object.keys(data).map((source, index) => ({
          source,
          title: data[source].title || "",
          url: data[source].url || "#",
          route: `/news?topicId=${source.toLowerCase()}`,
        }));
        setArticles(loadedArticles);
      } catch (err) {
        setError(err.message);
      }
    })();
  }, []);

  return (
    <div style={{ width: "100%", height: "100%", background: "white", position: "relative" }}>
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
          width: 251,
          height: 37,
          left: 23,
          top: 119,
          position: "absolute",
          background: "#D9D9D9",
          borderRadius: 10,
        }}
      />
      <div
        style={{
          width: 91,
          height: 37,
          left: 280,
          top: 119,
          position: "absolute",
          background: "#D9D9D9",
          borderRadius: 10,
        }}
      />
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>Trump Tariffs</h1>
      {error && <p style={{ color: "red", textAlign: "center" }}>Error: {error}</p>}

      {articles.map((article, idx) => (
        <div
          key={idx}
          style={{
            width: 348,
            height: 98,
            left: 23,
            position: "absolute",
            top: 177 + idx * 118,
            background: idx === 0 ? "#FBE45B" : idx === 1 ? "#2C7C94" : "#C4AA23",
            borderRadius: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 20px",
          }}
        >
          <div>
            <h2 style={{ fontSize: "20px", margin: 0 }}>{article.title}</h2>
            <p style={{ fontSize: "16px", color: "black" }}>{article.source}</p>
          </div>
          <Link to={`http://localhost:3000${article.route}`} style={{ textDecoration: "none", fontSize: "18px", color: "black" }}>
            ➜
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Home;
