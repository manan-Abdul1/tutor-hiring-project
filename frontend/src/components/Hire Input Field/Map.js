import React, { useState, useRef, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import 'leaflet/dist/leaflet.css';
import 'leaflet-geosearch/dist/geosearch.css';

const Map = () => {
    const [selectedLocation, setSelectedLocation] = useState(null);
    const mapRef = useRef(null);
  
    // Initialize the OpenStreetMapProvider with the region set to Pakistan and language to English
    const provider = new OpenStreetMapProvider({
      params: {
        countrycodes: 'pk', // Set the country code to Pakistan
        language: 'en', // Set the language to English
      },
    });
  
    // Function to handle the search results
    const handleSearchResult = (result) => {
      const { x, y, label } = result;
      setSelectedLocation([y, x]);
      mapRef.current.setView([y, x], 13);
      alert(`Selected Location: ${label}`);
    };
  
    useEffect(() => {
      if (mapRef.current) {
        // Create the GeoSearchControl with language set to English
        const searchControl = new GeoSearchControl({
          provider,
          autoComplete: true,
          searchLabel: 'Search for a location',
          showMarker: false,
          style: 'bar',
          autoClose: true,
          maxMarkers: 1,
          language: 'en', // Set the language to English
          search: handleSearchResult,
        });
  
        // Add the search control to the map
        mapRef.current.addControl(searchControl);
      }
    }, [mapRef]);
  
    const position = [30.3753, 69.3451]; // Centered on Pakistan
  
    const data = {
      options: 'option1',
      classNames: 'class1',
      markers: 'marker1',
      searchElement: 'searchElement1',
      button: 'button1',
      resetButton: 'resetButton1',
      resultList: 'resultList1',
      _initHooksCalled: 'initHooksCalled1',
    };
  
    const dataArray = Object.entries(data).map(([key, value]) => (
      <div key={key}>
        <strong>{key}:</strong> {value}
      </div>
    ));
  
    return (
      <div>
        <MapContainer center={position} zoom={6} style={{ height: '500px', width: '100%' }} ref={mapRef}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              <div>{dataArray}</div>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    );
  };
  
  export default Map;
  