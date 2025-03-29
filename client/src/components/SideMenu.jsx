import React from "react";
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";

function SideMenu({ visible, onClose, onOpen }) {
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
    backgroundColor: "rgba(203, 230, 230, 0.8)",
    backdropFilter: "blur(5px)",
    WebkitBackdropFilter: "blur(5px)",
    zIndex: 10,
  };

  return (
    <div style={containerStyle}>
      <AiOutlineMenuUnfold
        size={26}
        style={{
          cursor: "pointer",
          position: "absolute",
          right: -35,
          top: 20,
          zIndex: 20,
          display: visible ? "none" : "block",
          padding: 20,
          margin: -20,
        }}
        onClick={onOpen}
      />
      <AiOutlineMenuFold
        size={26}
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
        }}
      >
        <p>
          I've always been curious about how wealthy individuals spend their
          money—especially when it comes to real estate. The massive size and
          sky-high prices of their homes fascinate me, and I wanted to see it
          all mapped out.
        </p>
        <p>
          For this project, I pulled data from past videos by{" "}
          <a href="https://www.youtube.com/@EnesYilmazer" target="_blank">
            Enes Yilmazer
          </a>
          , a YouTuber I've followed for some time. Using the{" "}
          <b>Google Maps API</b>, I visualized the locations of these luxury
          properties around the world. Each pin on the map includes the home's
          price, key details, and a link to the original video tour by Enes.
        </p>
        <p>
          Feel free to navigate the map and click on a house icon to see more!
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
