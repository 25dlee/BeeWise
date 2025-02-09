import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const S3_JSON_URL = "https://hackduke.s3.us-east-1.amazonaws.com/main_database/Trump+Tariffs.json";

function News1() {
  const [searchParams] = useSearchParams();
  const topicId = searchParams.get("topicId"); // Get topicId from query params
  const [article, setArticle] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async function fetchData() {
      try {
        setError(null);
        if (!topicId) {
          throw new Error("Missing topicId in query parameters");
        }

        const response = await fetch(S3_JSON_URL);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const jsonData = await response.json();

        // Ensure topicId is in uppercase for consistency
        const sourceKey = topicId.toUpperCase();

        // Check if the sourceKey exists in the JSON data
        if (jsonData[sourceKey]) {
          setArticle(jsonData[sourceKey]);
        } else {
          setError("Article not found");
        }
      } catch (err) {
        setError(err.message);
      }
    })();
  }, [topicId]);

  return (
    <div style={{ width: "100%", height: "100%", position: "relative", background: "white" }}>
      <h1 style={{ left: 28, top: 50, position: "absolute", color: "black", fontSize: 32, fontFamily: "Inter", fontWeight: "400", wordWrap: "break-word" }}>
        {article ? article.title : "Loading..."}
      </h1>
      <p style={{ width: 347.89, left: 28, top: 100, position: "absolute", color: "black", fontSize: 16, fontFamily: "Inter", fontWeight: "400", wordWrap: "break-word" }}>
        {article ? article.content : "Loading content..."}
      </p>
      {article && (
        <a href={article.url} target="_blank" rel="noopener noreferrer" style={{ left: 28, top: 200, position: "absolute", color: "blue", fontSize: 16 }}>
          Read Full Article
        </a>
      )}
      {error && <p style={{ color: "red", textAlign: "center" }}>Error: {error}</p>}
    </div>
  );
}

export default News1;
