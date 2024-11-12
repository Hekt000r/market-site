import React from "react";
import { useState } from "react";
import { MapContainer } from "react-leaflet";
import { TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

function Map() {
  const [location, setLocation] = useState([])
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((p) => {
// success

    }, () => {
// error

    })
  } else{

  }
  const [position, setPosition] = useState([42.00736, 20.97548]);
  return (
    <MapContainer center={position} zoom={15.5} style={{ width: '1000px', height: '500px' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[42.007797, 20.978490]} >
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <Marker position={[42.006247, 20.969977]} >
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <Marker position={[41.991082, 21.434602]} >
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <Marker position={[41.9949944, 21.3945748]} >
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <Marker position={[41.9954171, 21.5098008]} >
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <Marker position={[41.9993986, 21.4213699]} >
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
