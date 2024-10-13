'use client';

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useState } from 'react';

const Map = ({ latitude, longitude }) => {
  const [map, setMap] = useState(null);

  const center = {
    lat: latitude,
    lng: longitude,
  };

  const onLoad = (map) => {
    setMap(map);
  };

  return (
    <div className="flex justify-center items-center h-screen -m-4">
      <div className="border-8 rounded-lg">
        <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
          <GoogleMap
            mapContainerStyle={{ width: '900px', height: '650px' }}
            center={center}
            zoom={10}
            onLoad={onLoad}
          >
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default Map;
