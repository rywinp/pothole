"use client";

import React, { useState, useEffect } from 'react';

const useLocation = () => {
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
    error: null,
  });

  // Add an additional state to check if the component is mounted
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Only set this once the component has mounted
  }, []);

  useEffect(() => {
    if (isClient && 'geolocation' in navigator) {
      const watchId = navigator.geolocation.watchPosition(
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
            error: error.message,
          }));
        },
        {
          enableHighAccuracy: true, // Use high accuracy for better results
          timeout: 20000, // Increase the timeout to 20 seconds
          maximumAge: 10000, // Allow a cached position up to 10 seconds old
        }
      );

      // Cleanup when the component unmounts
      return () => navigator.geolocation.clearWatch(watchId);
    } else if (!isClient) {
      setLocation((prevState) => ({
        ...prevState,
        error: 'Geolocation is not supported or the app is running on the server.',
      }));
    }
  }, [isClient]);

  return (
    <div>
      {location.error ? (
        <p>Error: {location.error}</p>
      ) : (
        <div>
          <h2>Your Live Location</h2>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
        </div>
      )}
    </div>
  );
};

export default useLocation;
