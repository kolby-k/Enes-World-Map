import { ControlPosition, Map, useMap } from "@vis.gl/react-google-maps";
import React, { useEffect, useState } from "react";
import CustomMarker from "./CustomMarker";
import SideMenu from "./SideMenu";

function BaseMap() {
  const [menuVisible, setMenuVisible] = useState(true);
  const [zoom, setZoom] = useState(3);
  const [tilt, setTilt] = useState(45);
  const [streetViewVisible, setStreetViewVisible] = useState(false);

  const map = useMap();

  useEffect(() => {
    if (!map) return;

    setTilt(map.getTilt());
    setZoom(map.getZoom());

    const zoomListener = map.addListener("zoom_changed", () => {
      const currentZoom = map.getZoom();
      if (tilt !== 45 && zoom < 18) {
        setTilt(45);
      }
      setZoom(currentZoom);
    });

    const tiltListener = map.addListener("tilt_changed", () => {
      const currentTilt = map.getTilt();
      setTilt(currentTilt);
    });

    // Get Street View Panorama instance
    const sv = map.getStreetView();

    // Initialize visibility state
    setStreetViewVisible(sv.getVisible());

    // Listen for changes in Street View visibility
    const svVisibilityListener = sv.addListener("visible_changed", () => {
      setStreetViewVisible(sv.getVisible());
    });

    return () => {
      zoomListener.remove();
      tiltListener.remove();
      svVisibilityListener.remove();
    };
  }, [map]);
  return (
    <>
      <SideMenu
        visible={menuVisible}
        onClose={() => setMenuVisible(false)}
        onOpen={() => setMenuVisible(true)}
        streetViewVisible={streetViewVisible}
      />
      <div id="base-map">
        <Map
          mapId="cece348358613a57"
          zoom={zoom}
          tilt={tilt}
          colorScheme="LIGHT"
          defaultCenter={{ lat: 25.683, lng: -32.858 }}
          disableDefaultUI
          tiltInteractionEnabled
          mapTypeId={"hybrid"}
          streetViewControl
        >
          <CustomMarker setZoom={setZoom} setTilt={setTilt} />
        </Map>
      </div>
    </>
  );
}

export default BaseMap;
