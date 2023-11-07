import React, { useEffect } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet-geosearch/dist/geosearch.css';
import 'leaflet-geosearch';
import L from 'leaflet';
import { geosearch } from 'esri-leaflet-geocoder';

function MapWithSearch() {
  useEffect(() => {
    const map = L.map('map').setView([30.3753, 69.3451], 6);
    const tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    });

    map.addLayer(tileLayer);

    // Initialize the geocoder
    const searchControl = geosearch().addTo(map);

    // Handle search results
    searchControl.on('results', (data) => {
      console.log(data);
    });
  }, []);

  return <div id="map" style={{ width: '100%', height: '400px' }} />;
}

export default MapWithSearch;
