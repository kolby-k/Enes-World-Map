import { Map } from "@vis.gl/react-google-maps";
import React from "react";
import CustomMarker from "./CustomMarker";

function BaseMap() {
  return (
    <div id="base-map">
      <Map
        mapId="cece348358613a57"
        defaultZoom={5}
        defaultCenter={{ lat: 38.048615, lng: -118.070847 }}
        onCameraChanged={(ev) =>
          console.log(
            `carmera changed: ${ev.detail.center}, zoom: ${ev.detail.zoom}`
          )
        }
      >
        <CustomMarker />
      </Map>
    </div>
  );
}

export default BaseMap;
