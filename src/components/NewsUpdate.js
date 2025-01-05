import React from "react";

const NewsUpdate = ({ title, description, imageUrl, newsUrl }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={imageUrl || "https://via.placeholder.com/150"}
        className="card-img-top"
        alt={title || "News Image"}
      />
      <div className="card-body">
        <h5 className="card-title">{title || "Default Title"}</h5>
        <p className="card-text">{description || "No description available."}</p>
        <a
          href={newsUrl || "#"}
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsUpdate;
