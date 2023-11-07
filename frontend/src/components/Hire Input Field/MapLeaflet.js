import React, { useState } from 'react';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import "./MapLeaflet.css";

function SearchMap({ onLocationSelect }) {
  const map = useMap();

  const tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  });
  map.addLayer(tileLayer);

  const provider = new OpenStreetMapProvider();

  const handleSearch = async (query) => {
    try {
      const results = await provider.search({ query });
      if (results.length > 0) {
        // Extract the first result
        const result = results[0];
        onLocationSelect(result);
      } else {
        console.error('No results found for the query:', query);
        // You can display an error message or take other actions here.
      }
    } catch (error) {
      console.error('Error performing location search:', error);
      // Handle the error appropriately.
    }
  };

  const searchControl = new GeoSearchControl({
    provider,
    autoComplete: true,
    autoCompleteDelay: 200,
    style: 'bar',
    showMarker: true,
    showPopup: true,
    keepResult: true,
    resultFormat: ({ result }) => '' + result.label,
    searchLabel: 'Enter location',
    search: handleSearch, // Use the custom search function
  });

  map.addControl(searchControl);

  return null;
}

function MapWithSearchLeaflet({ setPhysicalLocation }) {
  function handleLocationSelection(selectedLocation) {
    // Call the callback function to set the physicalLocation state
    setPhysicalLocation(selectedLocation);
  }

  const provider = new OpenStreetMapProvider(); // Define the provider variable here

  const handleSearch = async (query) => {
    try {
      const results = await provider.search({ query });
      if (results.length > 0) {
        // Extract the first result
        const result = results[0];
        handleLocationSelection(result);
      } else {
        console.error('No results found for the query:', query);
        // You can display an error message or take other actions here.
      }
    } catch (error) {
      console.error('Error performing location search:', error);
      // Handle the error appropriately.
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const input = e.target.querySelector('input[type="text"]');
    const query = input.value;
    handleSearch(query); // Call the search function when the form is submitted
  };

  return (
    <MapContainer
      center={[30.3753, 69.3451]}
      zoom={6}
      style={{ width: '100%', height: '400px' }}
    >
      <SearchMap onLocationSelect={handleLocationSelection} />
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter location" />
        <button type="submit">Search</button>
      </form>
    </MapContainer>
  );
}

export default MapWithSearchLeaflet;
