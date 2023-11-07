import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';

function SearchMap({ map }) {
  useEffect(() => {
    if (map) {
      // Configure the tile layer
      const tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      });

      // Add the tile layer to the map
      tileLayer.addTo(map);

      // Configure the geocoding search provider
      const provider = new OpenStreetMapProvider();

      // Configure the search control
      const searchControl = new GeoSearchControl({
        provider,
        style: 'bar',
        showMarker: true,
        showPopup: false,
        autoClose: true,
      });

      // Add the search control to the map
      map.addControl(searchControl);
    }
  }, [map]);

  return null;
}

function MapWithSearchLeaflet() {
  const mapRef = useRef(null);

  useEffect(() => {
    if ("geolocation" in navigator && mapRef.current) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        mapRef.current.setView([latitude, longitude], 15);
      });
    }
  }, []);

  return (
    <MapContainer
      center={[0, 0]}
      zoom={1}
      style={{ width: '99%', height: '400px' }}
      whenCreated={(map) => (mapRef.current = map)}
    >
      <SearchMap map={mapRef.current} />
    </MapContainer>
  );
}

export default MapWithSearchLeaflet;
