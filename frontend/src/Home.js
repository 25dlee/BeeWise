import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const S3_JSON_URL = "https://hackduke.s3.us-east-1.amazonaws.com/main_database/Trump+Tariffs.json";

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
        const loadedArticles = Object.keys(data).map((source) => ({
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
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Trump Tariffs</h1>
      {error && <p style={{ color: "red", textAlign: "center" }}>Error: {error}</p>}

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "15px" }}>
        {articles.map((article, idx) => (
          <div
            key={idx}
            style={{
              width: "350px",
              minHeight: "120px",
              background: "#FBE45B",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "15px",
              boxSizing: "border-box",
              textAlign: "left",
            }}
          >
            <div style={{ flex: 1, marginRight: "10px" }}>
              <h2
                style={{
                  fontSize: "18px",
                  margin: 0,
                  wordWrap: "break-word",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "normal",
                }}
              >
                {article.title}
              </h2>
              <p
                style={{
                  fontSize: "14px",
                  color: "black",
                  margin: "5px 0 0 0",
                  wordWrap: "break-word",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "normal",
                }}
              >
                {article.source}
              </p>
            </div>
            <Link
              to={article.route}
              style={{
                textDecoration: "none",
                fontSize: "24px",
                color: "black",
              }}
            >
              ➜
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
