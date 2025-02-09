import React, { useState } from "react";
import { Link } from "react-router-dom";

function TopicCard({ topic_title, image_url }) {
    const [isHovered, setIsHovered] = useState(false);

    // Styles for the card container and image wrapper
    const cardStyle = {
        position: "relative",
        width: "100%",
        maxWidth: "400px",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
        overflow: "hidden",
        transition: "transform 0.2s ease-in-out"
    };

    const imageWrapperStyle = {
        position: "relative",
        width: "100%",
        height: "250px" // Adjust height as needed
    };

    const imageStyle = {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block"
    };

    const overlayStyle = {
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        background: "rgba(234, 224, 137, 0.5)" // Semi-transparent yellow/gray overlay
    };

    const contentStyle = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
        zIndex: "2"
    };

    // Base styles for the title (non-hover state)
    const titleStyle = {
        fontSize: "1.5rem",
        fontWeight: "bold",
        color: isHovered ? "#FFC235" : "#ffffff",  // Change color on hover
        textDecoration: isHovered ? "underline" : "none" // Underline on hover
    };

    const linkStyle = {
        textDecoration: "none", // No underline by default
        color: "inherit" // Inherit color from titleStyle
    };

    return (
        <div style={cardStyle} className="topic-card">
            <div style={imageWrapperStyle}>
                <img src={image_url} alt={topic_title} style={imageStyle} />
                <div style={overlayStyle}></div>
                <div style={contentStyle}>
                    <Link 
                        to={`/news/${encodeURIComponent(topic_title)}`} 
                        state={{ topic: topic_title }} 
                        style={linkStyle}
                        onMouseEnter={() => setIsHovered(true)}  // Set hover state to true
                        onMouseLeave={() => setIsHovered(false)}  // Set hover state to false
                    >
                        <h2 style={titleStyle}>{topic_title}</h2>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default TopicCard;
