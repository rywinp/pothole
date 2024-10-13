"use client";

import React, { useState, useEffect } from 'react';

const Home = () => {
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
    error: null,
  });

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.watchPosition(
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
    } else {
      setLocation((prevState) => ({
        ...prevState,
        error: 'Geolocation is not supported by this browser.',
      }));
    }
  }, []);

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

export default Home;
