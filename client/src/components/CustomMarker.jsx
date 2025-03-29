import { MarkerClusterer } from "@googlemaps/markerclusterer";
import { AdvancedMarker, InfoWindow, useMap } from "@vis.gl/react-google-maps";
import React, { useEffect, useRef, useState } from "react";
import LOCATIONS from "../constants/locations";
import PIN_ICONS from "../constants/icons";
import Tooltip from "./Tooltip";

function CustomMarker() {
  const map = useMap();
  const [markers, setMarkers] = useState({});
  const clusterer = useRef(null);
  const [markerVisibility, setMarkerVisibility] = useState({});

  // When a marker is clicked:
  const handleMarkerClick = (key) => {
    if (markerVisibility === key) {
      setMarkerVisibility(null);
    } else {
      setMarkerVisibility(key);
    }
  };

  // initialize MarkerClusterer, if the map has changed
  useEffect(() => {
    if (!map) return;
    if (!clusterer.current) {
      clusterer.current = new MarkerClusterer({ map });
    }
  }, [map]);

  // update markers, if the markers array has changed
  useEffect(() => {
    clusterer.current?.clearMarkers();
    clusterer.current?.addMarkers(Object.values(markers));
  }, [markers]);

  const setMarkerRef = (marker, key) => {
    if (marker && markers[key]) return;
    if (!marker && !markers[key]) return;

    setMarkers((prev) => {
      if (marker) {
        return { ...prev, [key]: marker };
      } else {
        const newMarkers = { ...prev };
        delete newMarkers[key];
        return newMarkers;
      }
    });
  };

  return (
    <>
      {LOCATIONS.map((l) => (
        <AdvancedMarker
          key={l.id}
          position={l.location}
          title={l.street}
          ref={(marker) => setMarkerRef(marker, l.id)}
          onClick={() => handleMarkerClick(l.id)}
        >
          <img src={PIN_ICONS[l.type]} height={60} width={"auto"} />
          {markerVisibility === l.id && (
            <InfoWindow
              anchor={markers[l.id]}
              onClose={() => handleMarkerClick(l.id)}
            >
              <Tooltip
                street={l.street}
                type={l.type}
                price={l.price}
                city={l.city}
                state={l.state}
                country={l.country}
                url={l.url}
                bedrooms={l.bedrooms}
                fullBathrooms={l.bathrooms.split(".")[0]}
                halfBathrrom={l.bathrooms.split(".")[1]}
                squareFeet={l.square_feet}
                lotSize={l.lot_size || null}
                videoDate={l.date_posted}
              />
            </InfoWindow>
          )}
        </AdvancedMarker>
      ))}
    </>
  );
}

export default CustomMarker;
