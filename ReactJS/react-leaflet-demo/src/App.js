import React, {useState} from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './App.css';
import { Icon } from "leaflet";
import * as parkData from "./data/skateboard-parks.json";

export default function App() {
  const [activePark, setActivePark] = useState(null);

  return (
    <MapContainer center={[45.4, -75.7]} zoom={12} scrollWheelZoom={false}>
      {parkData.features.map(park => (
        <Marker
          key={park.properties.PARK_ID}
          position={[
            park.geometry.coordinates[1],
            park.geometry.coordinates[0]
          ]}
          onClick={() => {
            setActivePark(park);
          }}
          icon={icon}
        />
      ))}
    </MapContainer>
  );
}