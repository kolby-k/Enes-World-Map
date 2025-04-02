import { useMap } from "@vis.gl/react-google-maps";
import React from "react";
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";

function SideMenu({ visible, streetViewVisible, onClose, onOpen }) {
  const leftValue = visible ? "0px" : "-350px";

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    paddingTop: 10,
    alignItems: "center",
    position: "absolute",
    left: leftValue,
    top: "0px",
    width: "350px",
    height: "100%",
    backgroundColor: "rgba(86, 86, 86, 0.8)",
    backdropFilter: "blur(5px)",
    WebkitBackdropFilter: "blur(5px)",
    zIndex: 10,
  };

  return (
    <div style={containerStyle}>
      <AiOutlineMenuUnfold
        size={26}
        color="#fff"
        style={{
          cursor: "pointer",
          position: "absolute",
          right: -35,
          top: streetViewVisible ? 80 : 20,
          zIndex: 20,
          display: visible ? "none" : "block",
          padding: 20,
          margin: -20,
        }}
        onClick={onOpen}
      />
      <AiOutlineMenuFold
        size={26}
        color="#fff"
        style={{
          cursor: "pointer",
          position: "absolute",
          right: 20,
          top: 10,
          padding: 20,
          margin: -20,
        }}
        onClick={onClose}
      />
      <h2 style={{ paddingTop: 20 }}>About</h2>
      <span
        style={{
          borderTop: "1px solid gray",
          display: "block",
          width: "30%",
          height: "8px",
        }}
      ></span>
      <div
        style={{
          display: "flex",
          rowGap: "1em",
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-evenly",
          marginRight: 15,
          marginLeft: 15,
          color: "white",
        }}
      >
        <p>
          Ever wonder how the ultra-wealthy spend their money when purchasing
          homes? Using the <b>Google Maps API</b>, I’ve plotted the locations of
          luxury properties around the globe to answer this question.{" "}
        </p>
        <p>
          Click a house icon to explore property prices, standout features, and
          direct links to original video tours.{" "}
        </p>
        <p>
          The data has been gathered from{" "}
          <a href="https://www.youtube.com/@EnesYilmazer" target="_blank">
            Enes Yilmazer
          </a>
          , a YouTuber known for touring some of the world’s most expensive
          homes.
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "center",
            paddingBottom: "30px",
          }}
        >
          <h6>
            Created by{" "}
            <a href="https://kolbyk.ca" target="_blank">
              Kolby Klassen
            </a>
          </h6>
        </div>
      </div>
    </div>
  );
}

export default SideMenu;
