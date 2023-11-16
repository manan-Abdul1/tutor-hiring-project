import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { OpenStreetMapProvider } from 'leaflet-geosearch';

const MapLocationIq = ({ setPhysicalLocation }) => {
  const [location, setLocation] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [suggestionSelected, setSuggestionSelected] = useState(false);

  const provider = new OpenStreetMapProvider({
    params: {
      countrycodes: 'pk',
      language: 'en',
    },
  });

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
    setSuggestionSelected(false);
  };

  const handleSelectSuggestion = (suggestion) => {
    setSearchValue(suggestion.label);
    setPhysicalLocation(suggestion.label);
    setLocation(suggestion);
    setSuggestions([]);
    setSuggestionSelected(true);
  };

  useEffect(() => {
    if (searchValue) {
      provider
        .search({ query: searchValue })
        .then((results) => setSuggestions(results))
        .catch((error) => {
          console.error('Error fetching suggestions:', error);
          setSuggestions([]);
        });
    }
  }, [searchValue]);

  const MapComponent = ({ center }) => {
    const map = useMap();
    if (center) {
      map.flyTo(center, 18);
    }
    return null;
  };

  return (
    <div>
      <input
        type="text"
        value={searchValue}
        onChange={handleSearchChange}
        placeholder="Search Location"
        style={{
          width: '100%',
          padding: '8px',
          border: '1px solid #ccc',
          borderRadius: '4px',
        }}
      />
      {suggestions.length > 0 && !suggestionSelected && (
        <ul
          style={{
            marginTop: '10px',
            padding: '0',
            listStyle: 'none',
            border: '1px solid #ccc',
            borderRadius: '4px',
            background: 'white',
          }}
        >
          {suggestions.map((suggestion) => (
            <li
              key={suggestion.place_id}
              onClick={() => handleSelectSuggestion(suggestion)}
              style={{
                cursor: 'pointer',
                padding: '8px',
                ':hover': {
                  background: '#f0f0f0',
                },
              }}
            >
              {suggestion.label}
            </li>
          ))}
        </ul>
      )}
      <MapContainer
        zoom={11}
        style={{ height: '60vh', width: '100%' }}
        center={location ? [location.y, location.x] : [31.5204, 74.3587]}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {location && (
          <Marker position={[location.y, location.x]}>
            <Popup>{location.label}</Popup>
          </Marker>
        )}
        <MapComponent center={location ? [location.y, location.x] : [31.5204, 74.3587]} />
      </MapContainer>
    </div>
  );
};

export default MapLocationIq;


// Function to geocode with LocationIQ
const geocode = async (query) => {
  const apiKey = 'pk.017ee18c650ce4549a3402c52847140f'; // Replace with your LocationIQ access token
  try {
    const response = await fetch(
      `https://eu1.locationiq.com/v1/search.php?key=${apiKey}&q=${query}&format=json&limit=5&addressdetails=1`
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.error('Error during geocoding:', error);
  }
  return [];
};