import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const GoogleMapComponent = () => {
  const containerStyle = {
    width: '100%',
    height: '400px',
  };

  const defaultCenter = {
    lat: 40.73061, // Example default latitude
    lng: -73.935242, // Example default longitude
  };

  const [location, setLocation] = useState(defaultCenter);
  const [error, setError] = useState(null);
  let [array, setArray] = useState([]);

  useEffect(() => {
    setArray([
      {
        "id": 2,
        "lat": 42.3179454,
        "lng": -83.231270
      },
      {
        "id": 3,
        "lat": 42.3171226,
        "lng": -83.231270
      },
      {
        "id": 4,
        "lat": 42.317534,
        "lng": -83.231270
      },
      {
        "id": 5,
        "lat": 42.317534,
        "lng": -83.2317951
      },
      {
        "id": 6,
        "lat": 42.3174518,
        "lng": -83.231270
      }
    ])
  }, []);

  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const newLocation = { lat: latitude, lng: longitude };
        setLocation(newLocation);
        console.log('Updated location:', newLocation); // Log the updated location
      },
      (err) => {
        setError(err.message);
        console.error('Geolocation error:', err); // Log any geolocation errors
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );

    // Clean up the watch on component unmount
    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, []);

  useEffect(() => {
    console.log('Current location state:', location);
  }, [location]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <LoadScript googleMapsApiKey={'AIzaSyDgauAPxyDnkFRZlgOq-el4BSp_EFLSnbA'}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={location} // Use updated location
        zoom={10}
      >
        {location.lat && location.lng && (
          <Marker position={location} />
        )}

          {array.map(coord => (
                    <Marker
                        key={coord.id}
                        position={{ lat: coord.lat, lng: coord.lng }}
                    />
                ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
