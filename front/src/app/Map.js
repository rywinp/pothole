import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useState } from 'react';

const Map = ({ latitude, longitude }) => {
  const [map, setMap] = useState(null);

  const center = {
    lat: latitude,
    lng: longitude
  };

  const onLoad = map => {
    setMap(map);
  };

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '400px' }}
        center={center}
        zoom={10}
        onLoad={onLoad}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;