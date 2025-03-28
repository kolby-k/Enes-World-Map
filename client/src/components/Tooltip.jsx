import React from "react";

// Define the Tooltip component for the info window content
const Tooltip = ({
  street,
  price,
  type,
  city,
  state,
  country,
  url,
  bedrooms,
  fullBathrooms,
  halfBathrooms,
  squareFeet,
  lotSize,
  videoDate,
}) => {
  function YouTubeThumbnail() {
    const regex = /(?:youtube\.com\/.*(?:\\?|&)v=|youtu\.be\/)([a-zA-Z0-9_-]+)/;
    const match = url.match(regex);
    const videoId = match[1] || null;

    if (!videoId) {
      return <p>Invalid YouTube URL</p>;
    }

    return `https://img.youtube.com/vi/${videoId}/0.jpg`;
  }

  const typeLabel = type.charAt(0).toUpperCase() + type.slice(1);

  const priceLabel = parseFloat(price).toLocaleString();
  return (
    <div id="tooltip">
      <h2>
        {city}, {state} | {country}
      </h2>
      <h3>{street}</h3>
      <ul>
        <li>
          <b>Type:</b>
          <p>{typeLabel}</p>
        </li>
        <li>
          <b>Bedrooms:</b>
          <p>{bedrooms}</p>
        </li>
        <li>
          <b>Full Bathrooms:</b>
          <p>{fullBathrooms}</p>
        </li>
        <li>
          <b>Half Bathrooms:</b>
          <p>{halfBathrooms || 0}</p>
        </li>
        <li>
          <b>Price:</b>
          <p>${priceLabel}</p>
        </li>
        <li>
          <b>House Size:</b>
          <p>{parseFloat(squareFeet).toLocaleString()} Sq.Ft</p>
        </li>
        {lotSize && (
          <li>
            <b>Lot Size:</b>
            <p>{parseFloat(lotSize).toLocaleString()} Acres</p>
          </li>
        )}
      </ul>
      <p id="tooltip-description">
        Want to see more? Watch a full tour of the property:
      </p>
      <span id="video-thumbnail">
        <a href={url} target="_blank" style={{ display: "flex", flex: 1 }}>
          <a id="watch-button" href={url} target="_bank">
            Watch Video
          </a>
          <img
            src={YouTubeThumbnail()}
            alt="Youtube Thumbnail"
            id="thumbnail-img"
          />
        </a>
      </span>
      <p id="video-date">
        Video Posted on{" "}
        {new Date(videoDate).toLocaleDateString("en-US", {
          weekday: "long",
          day: "2-digit",
          month: "long",
          year: "numeric",
        })}
      </p>
    </div>
  );
};

export default Tooltip;
