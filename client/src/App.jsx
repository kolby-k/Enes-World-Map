import React from "react";
import "./style.css";
import BaseMap from "./components/BaseMap";
import { APIProvider } from "@vis.gl/react-google-maps";

function App() {
  return (
    <APIProvider
      apiKey={import.meta.env.VITE_GOOGLE_API_KEY}
      onLoad={() => console.log("Maps API has loaded.")}
    >
      <main>
        <BaseMap />
      </main>
    </APIProvider>
  );
}

export default App;
