'use client';

import { useState, useEffect } from 'react';
import Map from './Map.js';

interface Location {
  latitude: number | null;
  longitude: number | null;
  error: string | null;
}

const MapPage = () => {
  const [location, setLocation] = useState<Location>({
    latitude: null,
    longitude: null,
    error: null,
  });

  useEffect(() => {
    if ('geolocation' in navigator) {
      // Request the user's location when the component mounts
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            error: null,
          });
        },
        (error) => {
          setLocation((prevState) => ({
            ...prevState,
            error: 'Unable to retrieve your location. Please check your permissions.',
          }));
        }
      );
    } else {
      setLocation((prevState) => ({
        ...prevState,
        error: 'Geolocation is not supported by this browser.',
      }));
    }
  }, []); // Empty dependency array means this effect runs once when the component mounts

  if (location.error) {
    return <div>Error: {location.error}</div>;
  }

  if (location.latitude === null || location.longitude === null) {
    return <div>Loading location...</div>; // Show loading until location is retrieved
  }

  return (
    <div>
      <h1>My Map</h1>
      {/* Pass the fetched coordinates to the Map component */}
      <Map latitude={location.latitude} longitude={location.longitude} />
    </div>
  );
};

export default MapPage;
