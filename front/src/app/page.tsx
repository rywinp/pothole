'use client';

import { useState } from 'react';
import GoogleMapComponent from './Map.js';

const MapPage = () => {

const [submitted, setSubmitted] = useState(false); // State to track if "Submit Pothole" is clicked



return (
  <div>
    <h1 className='text-center mt-4 text-xl'>For a safer trip, together.</h1>
    {/* Pass the fetched coordinates to the Map component */}
    <GoogleMapComponent/>
    
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
