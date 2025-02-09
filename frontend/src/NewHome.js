import React, { useState } from "react";
import { Link } from "react-router-dom";

const topicsPopular = [
  { title: "Trump Tariffs", image: "https://d3i6fh83elv35t.cloudfront.net/static/2025/01/2025-01-31T211323Z_640077057_RC29LCA2X64B_RTRMADP_3_USA-TRUMP-1024x682.jpg", jsonFile: "Trump Tariffs.json" },
  { title: "AI-Mega Deal", image: "https://deadline.com/wp-content/uploads/2025/01/GettyImages-2195165799.jpg?w=681&h=383&crop=1", jsonFile: "Government-AI.json" },
  { title: "Facebook Content Policy", image: "https://cdn.aarp.net/content/dam/aarpe/en/home/home-family/personal-technology/info-2020/delete-old-facebook-posts/_jcr_content/root/container_main/container_body_main/container_body1/container_body_cf/container_image/articlecontentfragment/cfimage.coreimg.50.688.jpeg/content/dam/aarp/home-and-family/family-and-friends/2020/06/1140-facebook-post.jpg", jsonFile: "Facebook.json" }, // Assuming, update if needed
  { title: "Border Crisis", image: "https://media.wbur.org/wp/2023/01/GettyImages-1235318693-1000x667.jpg", jsonFile: "Border.json" },
  { title: "Climate Change", image: "https://www.nationalgrid.com/sites/default/files/images/PolarBearWithCubOnSeaIce_640x360.jpg", jsonFile: "Climate-Change.json" },
  { title: "Abortion Rights", image: "https://stateline.org/wp-content/uploads/2024/09/Florida-abortion-measure-1024x683.jpg", jsonFile: "Abortion.json" }
];

const topicsTrending = [topicsPopular[1], topicsPopular[3], topicsPopular[5], topicsPopular[0], topicsPopular[2], topicsPopular[4]];
const topicsRecent = [topicsPopular[2], topicsPopular[4], topicsPopular[0], topicsPopular[5], topicsPopular[1], topicsPopular[3]];

function NewHome() {
  const [topics, setTopics] = useState(topicsPopular);

  return (
    <div style={{ width: "100%", minHeight: "100vh", backgroundColor: "#FAFAFA", display: "flex", flexDirection: "column", alignItems: "center", padding: "1rem" }}>
      <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginBottom: "1rem" }}>
        <button onClick={() => setTopics(topicsPopular)}>Popular</button>
        <button onClick={() => setTopics(topicsTrending)}>Trending</button>
        <button onClick={() => setTopics(topicsRecent)}>Recent</button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", width: "80%", maxWidth: "600px" }}>
        {topics.map((topic, index) => (
          <Link 
            key={index} 
            to={`/news?topicId=${encodeURIComponent(topic.jsonFile)}`} 
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div style={{ position: "relative", borderRadius: "8px", overflow: "hidden", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", height: "200px", backgroundColor: "#fff", border: "1px solid #ccc", cursor: "pointer" }}>
              <img src={topic.image} alt={topic.title} style={{ width: "100%", height: "80%", objectFit: "cover" }} />
              <div style={{ width: "100%", textAlign: "center", padding: "5px", background: "rgba(0, 0, 0, 0.7)", color: "#fff", fontWeight: "bold", fontSize: "14px" }}>
                {topic.title}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default NewHome;