'use client';

import { useState, useEffect } from 'react';
import Map from './Map.js';

const MapPage = () => {
  const [location, setLocation] = useState<{
    latitude: number | null;
    longitude: number | null;
    error: string | null;
  }>({
    latitude: null,
    longitude: null,
    error: null,
  });
  useEffect(() => {
    if ('geolocation' in navigator) {
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
  }, []);

  if (location.error) {
    return <div>Error: {location.error}</div>;
  }

  if (location.latitude === null || location.longitude === null) {
    return <div>Loading location...</div>;
  }

  return (
    <div>
      <h1 className='text-center mt-4 text-xl'>For a safer trip, together.</h1>
      {/* Pass the fetched coordinates to the Map component */}
      <Map latitude={location.latitude} longitude={location.longitude} />
      
      {/* Center the button horizontally */}
      <div className="flex justify-center mt-4">
        <button className="bg-white text-black font-bold py-2 px-6 rounded-full shadow-lg">
          Submit Pothole
        </button>
      </div>
    </div>
  );
};

export default MapPage;
