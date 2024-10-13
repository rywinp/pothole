'use client';

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useState, useEffect } from 'react';
const API_URL = "http://127.0.0.1:8000/api/get-data";

const Map = ({ latitude, longitude }) => {
  const [map, setMap] = useState(null);
  const [potholes, setPotholes] = useState([]);

  const center = {
    lat: latitude,
    lng: longitude,
  };

  const onLoad = (map) => {
    setMap(map);
  };

  function fetchData() {
    fetch(API_URL)
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then(data => {
        setPotholes(data);
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });
  }

  useEffect(() => {
    fetchData(); // Fetch data when component mounts

    const intervalId = setInterval(() => {
      fetchData(); // Fetch data every 5 seconds (5000 ms)
    }, 5000);

    // Update Interval every 1 second
    

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="flex justify-center items-center h-screen -m-4">
      <div className="border-8 rounded-lg w-full h-full md:w-4/5 md:h-4/5 lg:w-3/4 lg:h-3/4">
        <LoadScript googleMapsApiKey={process.env.AIzaSyA1cIr2IVeA2nbhvWYG}>
          
          <GoogleMap
            mapContainerStyle={{ width: '100%', height: '100%' }} // Responsive width and height
            center={center}
            zoom={10}
            onLoad={onLoad}
          >
            <Marker position={center} />
    
            {/* Render markers for each pothole */}
            {potholes.map((pothole, index) => (
              <Marker
                key={index} // Use a unique key, ideally something from the data
                position={{ lat: pothole.lat, lng: pothole.lng }} // Adjust according to your data structure
                title={`Severity: ${pothole.severity}`} // Title displayed when hovering over the marker
              />
            ))}
          </GoogleMap>
          
        </LoadScript>
      </div>
    </div>
  );
};

export default Map;
