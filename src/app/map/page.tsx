"use client";
import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const center = {
  lat: -37.07003,
  lng: -73.02456,
};

const containerStyle = {
  width: "100%",
  height: "90vh",
};

const markerTwo = {
  lat: -37.220058,
  lng: -73.165598,
};

const markers = [center, markerTwo];

const MapPage = () => {
  const apiKey = "AIzaSyCupMkEK_j1VOdFWe1a1rwdweoMp7bA9qU";
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: apiKey,
  });
  const [map, setMap] = React.useState(null);
  const onLoad = React.useCallback(function callback(map: any) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds();
    for (const element of markers) {
      bounds.extend(element);
    }
    map.fitBounds(bounds);
    // map.setZoom(14);
    setMap(map);
  }, []);
  console.log("maps", map);
  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      onLoad={onLoad}
      onUnmount={onUnmount}
      // zoom={14}
    >
      <Marker position={center} />
      <Marker position={markerTwo} />
    </GoogleMap>
  ) : (
    <></>
  );
};

export default MapPage;
