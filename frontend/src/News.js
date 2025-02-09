import React, { useState, useEffect, useContext } from "react";
import { useSearchParams } from "react-router-dom";
import { ScoreContext } from "./ScoreContext"; 

const BASE_S3_URL = "https://hackduke.s3.us-east-1.amazonaws.com/main_database/";

function News1() {
  const [searchParams] = useSearchParams();
  const topicId = searchParams.get("topicId"); 
  const [sources, setSources] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [error, setError] = useState(null);


  const { incrementYouPoints } = useContext(ScoreContext);

  useEffect(() => {
    (async function fetchData() {
      try {
        setError(null);
        if (!topicId) {
          throw new Error("Missing topicId in query parameters");
        }

        const formattedTopic = encodeURIComponent(topicId); 
        const url = `${BASE_S3_URL}${formattedTopic}`;

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const jsonData = await response.json();

        
        const sourceList = Object.keys(jsonData).map((source) => ({
          source,
          title: jsonData[source].title || "Untitled Article",
          content: jsonData[source].content || "No content available.",
          url: jsonData[source].url || "#",
          sentiment: jsonData[source].sentiment || "No sentiment data",
          bias: jsonData[source].bias || "No bias data",
        }));

        if (sourceList.length === 0) {
          throw new Error("No articles available for this topic.");
        }

        setSources(sourceList);
      } catch (err) {
        setError(err.message);
      }
    })();
  }, [topicId]);

  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        background: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        position: "relative",
      }}
    >
      {/* selected */}
      {selectedArticle ? (
        <div
          style={{
            width: "100%",
            maxWidth: "100%",
            background: "white",
            padding: "20px",
            overflowX: "hidden",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            minHeight: "100vh",
            boxSizing: "border-box",
          }}
        >
          <h1
            style={{
              color: "black",
              fontSize: "20px",
              fontWeight: "400",
              wordWrap: "break-word",
              textAlign: "center",
              width: "100%",
              maxWidth: "90%",
            }}
          >
            {selectedArticle.title}
          </h1>
          <p
    style={{
      backgroundColor: "#F8D7DA", // Light red for bias
      color: "#721C24",
      fontSize: "14px",
      fontWeight: "bold",
      padding: "8px 15px",
      borderRadius: "15px",
      textAlign: "center",
      display: "inline-block",
      marginTop: "10px",
    }}
  >
    Bias: {selectedArticle.bias}
  </p>
          <p
    style={{
      backgroundColor: "#D1ECF1", // Light blue for neutral feel
      color: "#0C5460",
      fontSize: "14px",
      fontWeight: "bold",
      padding: "8px 15px",
      borderRadius: "15px",
      textAlign: "center",
      display: "inline-block",
      marginTop: "10px",
    }}
  >
    Sentiment: {selectedArticle.sentiment}
  </p>



          <p
            style={{
              color: "black",
              fontSize: "14px",
              fontWeight: "400",
              wordWrap: "break-word",
              textAlign: "justify",
              width: "100%",
              maxWidth: "90%",
              marginTop: "10px",
              whiteSpace: "normal",
            }}
          >
            {selectedArticle.content}
          </p>

          




          <button
            onClick={() => setSelectedArticle(null)}
            style={{
              padding: "10px",
              fontSize: "16px",
              borderRadius: "5px",
              cursor: "pointer",
              background: "gray",
              color: "white",
              border: "none",
              width: "150px",
              textAlign: "center",
              marginTop: "20px",
            }}
          >
            Back to Sources
          </button>

          {error && (
            <p style={{ color: "red", textAlign: "center", marginTop: "10px", maxWidth: "90%" }}>
              Error: {error}
            </p>
          )}
        </div>
      ) : (
        <>
          <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
            {topicId.replace(".json", "")}
          </h1>
          {error && <p style={{ color: "red", textAlign: "center" }}>Error: {error}</p>}

          {/* source */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "15px",
            }}
          >
            {sources.map((article, idx) => (
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
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      setSelectedArticle(article);
                      incrementYouPoints();
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
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      setSelectedArticle(article);
                      incrementYouPoints();
                    }}
                  >
                    {article.source}
                  </p>
                </div>
                <button
                  style={{
                    textDecoration: "none",
                    fontSize: "24px",
                    color: "black",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setSelectedArticle(article);
                    incrementYouPoints();
                  }}
                >
                  ➜
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default News1;
