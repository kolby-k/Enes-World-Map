import { Map, useMap } from "@vis.gl/react-google-maps";
import React, { useState } from "react";
import CustomMarker from "./CustomMarker";
import SideMenu from "./SideMenu";

function BaseMap() {
  const [menuVisible, setMenuVisible] = useState(true);

  return (
    <>
      <SideMenu
        visible={menuVisible}
        onClose={() => setMenuVisible(false)}
        onOpen={() => setMenuVisible(true)}
      />
      <div id="base-map">
        <Map
          mapId="cece348358613a57"
          defaultZoom={3}
          colorScheme="LIGHT"
          defaultCenter={{ lat: 25.683, lng: -32.858 }}
          disableDefaultUI
          mapTypeControl={false}
        >
          <CustomMarker />
        </Map>
      </div>
    </>
  );
}

export default BaseMap;
