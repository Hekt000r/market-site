import React, { useEffect } from "react";
import { useState } from "react";
import { MapContainer } from "react-leaflet";
import { TileLayer, Marker, Popup, useMap } from "react-leaflet";
import axios from "axios";
import L, { LatLng, latLng } from "leaflet";
import "leaflet/dist/leaflet.css";

function LocationManager({ locationx }) {
  const map = useMap();
  map.panTo(locationx);
  return null;
}

const LocationMarker = ({ location }) => {
  const lat = parseFloat(location.latlng?.[0]?.toString()) || null;
  const lng = parseFloat(location.latlng?.[1]?.toString()) || null;

  return (
    <>
      {lat && lng && (
        <Marker position={[lat, lng]}>
          <Popup>
            {`Location ${location._id}`}
          </Popup>
        </Marker>
      )}
      {!lat && !lng && (
        <div>Error: Invalid coordinates for location {location._id}</div>
      )}
    </>
  );
};

function Map() {
  const [locationsList, setLocationsList] = useState([]);
  useEffect(() => {
    axios
      .get("/api/getLocations")
      .then((response) => {
        setLocationsList(response.data);
      })
      .catch((error) => {
        console.error(error);
        alert("Error fetching locations: " + error.message);
      });
  }, []);

  const [position, setPosition] = useState([42.00736, 20.97548]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (p) => {
          // success
          setPosition([p.coords.latitude, p.coords.longitude]);
          console.log(`Current position: ${[p.coords.longitude, p.coords.latitude]}`);
        },
        () => {
          // error
          setPosition([42.00736, 20.97548]);
          console.log("Geolocation error");
        }
      );
    } else {
      setPosition([42.00736, 20.97548]);
      console.log("Geolocation not supported");
    }
  }, []);

  return (
    <MapContainer
      center={position}
      zoom={12}
      style={{ width: "1000px", height: "500px" }}
    >
      <LocationManager locationx={position} />

      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <div>
        {locationsList.map((location, key) => (
          <LocationMarker key={key} location={location} />
        ))}
      </div>
    </MapContainer>
  );
}

export default Map;
