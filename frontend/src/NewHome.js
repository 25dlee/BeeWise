// src/NewHome.js
import React, { useState } from "react";
import TopicCard from "./TopicCard"; // Import the TopicCard component

// Define news topics with their corresponding images
const topicsPopular = [
  { title: "Trump Tariffs", image: "https://d3i6fh83elv35t.cloudfront.net/static/2025/01/2025-01-31T211323Z_640077057_RC29LCA2X64B_RTRMADP_3_USA-TRUMP-1024x682.jpg" },
  { title: "AI-Mega Deal", image: "https://deadline.com/wp-content/uploads/2025/01/GettyImages-2195165799.jpg?w=681&h=383&crop=1" },
  { title: "Facebook Content Policy", image: "https://cdn.aarp.net/content/dam/aarpe/en/home/home-family/personal-technology/info-2020/delete-old-facebook-posts/_jcr_content/root/container_main/container_body_main/container_body1/container_body_cf/container_image/articlecontentfragment/cfimage.coreimg.50.688.jpeg/content/dam/aarp/home-and-family/family-and-friends/2020/06/1140-facebook-post.jpg" },
  { title: "Border Crisis", image: "https://media.wbur.org/wp/2023/01/GettyImages-1235318693-1000x667.jpg" },
  { title: "Climate Change", image: "https://www.nationalgrid.com/sites/default/files/images/PolarBearWithCubOnSeaIce_640x360.jpg" },
  { title: "Abortion Rights", image: "https://stateline.org/wp-content/uploads/2024/09/Florida-abortion-measure-1024x683.jpg" }
];

const topicsTrending = [
  topicsPopular[1], topicsPopular[3], topicsPopular[5],
  topicsPopular[0], topicsPopular[2], topicsPopular[4]
];

const topicsRecent = [
  topicsPopular[2], topicsPopular[4], topicsPopular[0],
  topicsPopular[5], topicsPopular[1], topicsPopular[3]
];

function NewHome() {
  // Start with "popular" as the default ordering
  const [topics, setTopics] = useState(topicsPopular);

  // Handlers for changing the order
  const showPopular = () => setTopics(topicsPopular);
  const showTrending = () => setTopics(topicsTrending);
  const showRecent = () => setTopics(topicsRecent);

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#FAFAFA",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "1rem",
      }}
    >
      {/* Top button row (Popular / Trending / Recent) */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          marginBottom: "1rem",
        }}
      >
        <button onClick={showPopular}>Popular</button>
        <button onClick={showTrending}>Trending</button>
        <button onClick={showRecent}>Recent</button>
      </div>

      {/* 2x3 grid of topic frames with images */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr", // 2 columns
          gap: "1rem",
          width: "80%",
          maxWidth: "600px",
        }}
      >
        {topics.map((topic, index) => (
          <TopicCard key={index} topic_title={topic.title} image_url={topic.image} />
        ))}
      </div>
    </div>
  );
}

export default NewHome;
