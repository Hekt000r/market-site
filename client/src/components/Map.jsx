import React, { useEffect } from "react";
import { useState } from "react";
import { MapContainer } from "react-leaflet";
import { TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

function LocationManager({ locationx }) {
  const map = useMap()
  map.panTo(locationx)
  return null
}

function Map() {
  const [location, setLocation] = useState([42.00736, 20.9748]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (p) => {
          // success
          setLocation([p.coords.latitude, p.coords.longitude,]);
          console.log([p.coords.longitude, p.coords.latitude])
        },
        () => {
          // error
          setLocation([42.00736, 20.97548]);
        }
      );
    } else {
      setLocation([42.00736, 20.97548]);
    }
  }, [])
  const [position, setPosition] = useState([42.00736, 20.97548]);
  return (
    <MapContainer
      center={location}
      zoom={12}
      style={{ width: "1000px", height: "500px" }}
    >
      <LocationManager locationx={location} />

      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[42.007797, 20.97849]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <Marker position={[42.006247, 20.969977]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <Marker position={[41.991082, 21.434602]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <Marker position={[41.9949944, 21.3945748]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <Marker position={[41.9954171, 21.5098008]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <Marker position={[41.9993986, 21.4213699]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      // 41.0218074, 21.3280428
      // 41.1241359, 20.8068937 
      // 42.1272126, 21.7197153
      // 41.1241359, 20.8068937
      // 41.3429296, 21.5563598
      // 41.5112777, 20.9504446
      // 41.6337580, 22.4639658
      <Marker position={[41.0218074, 21.3280428]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <Marker position={[41.1241359, 20.8068937]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <Marker position={[42.1272126, 21.7197153]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      // _____________________________________________________
      <Marker position={[41.1241359, 20.8068937]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <Marker position={[41.3429296, 21.5563598]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <Marker position={[41.5112777, 20.9504446]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <Marker position={[41.6337580, 22.4639658]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      // _____________________________________________________
      <Marker position={[42.0027484, 21.4054411]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
