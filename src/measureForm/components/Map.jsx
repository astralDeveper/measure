import { useState, useEffect } from 'react';

export default function MapComponent({ data=null, setData }) {
  const [coordinates, setCoordinates] = useState({ lat: null, lng: null });
  const [loading, setLoading] = useState(true);
  const [currentLocation, setCurrentLocation] = useState(false);

  useEffect(() => {
    const getUserCoordinates = () => {
      if (!currentLocation) return;
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          setCoordinates({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
          setLoading(false);
          setData((s) => ({ ...s, mapLocation: { lat: position.coords.latitude, long: position.coords.longitude }, }))
        },
          (error) => {
            console.error('Error getting user location:', error);
            setLoading(false);
          }
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
        setLoading(false);
      }
    };

    getUserCoordinates();
  }, [currentLocation]);

  if (data) {
    return (
      <div className="map-container">
        <iframe
          width="600"
          height="450"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          style={{ border: 0, width: '100%', maxWidth: '600px' }}
          src={`https://www.google.com/maps?q=${data.lat},${data.long}&hl=es;z%3D14&amp&output=embed `}
          title="User Location"
        />
      </div>
    )
  }

  if (!currentLocation) {
    return (
      <div className="map-container">
        <button onClick={() => setCurrentLocation(true)} className='stepper-btn2'>
          Get current location
        </button>
      </div>
    )
  }

  return (
    <div className="map-container">
      {
      loading ?
        <p className='stepper-btn2'>Loading...</p>
        :
        <iframe
          width="600"
          height="450"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          style={{ border: 0, width: '100%', maxWidth: '600px' }}
          src={`https://www.google.com/maps?q=${coordinates.lat},${coordinates.lng}&hl=es;z%3D14&amp&output=embed `}
          title="User Location"
        />
      }
    </div>
  );
};
