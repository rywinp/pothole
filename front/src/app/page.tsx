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
const [submitted, setSubmitted] = useState(false); // State to track if "Submit Pothole" is clicked

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
      {!submitted ? (
        <button
          className="bg-white text-black font-bold py-2 px-6 rounded-full shadow-lg"
          onClick={() => setSubmitted(true)} // Change state when the button is clicked
        >
          Submit Pothole
        </button>
      ) : (
        // Show rating buttons when submitted is true
        <div className="flex flex-col items-center">
          <h2 className="text-lg font-bold mb-2">Rate Severity</h2> {/* Added this line */}
          <div className="flex space-x-4">
            {[1, 2, 3, 4, 5].map((rating) => (
              <button
                key={rating}
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full shadow-lg"
                onClick={() => console.log(`Selected severity: ${rating}`)}
              >
                {rating}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  </div>
);
};


export default MapPage;
