import React, { useState } from 'react';

import { GoogleMap, InfoWindow, Marker } from '@react-google-maps/api';

const markers = [
    {
        id: 1,
        name: 'Chicago, Illinois',
        position: { lat: 11.0168445, lng: 76.9558321 }
    },
    {
        id: 2,
        name: 'Denver, Colorado',
        position: { lat: 11.0168445, lng: 76.9558321 }
    },
    {
        id: 3,
        name: 'Los Angeles, California',
        position: { lat: 11.0168445, lng: 76.9558321 }
    },
    {
        id: 4,
        name: 'New York, New York',
        position: { lat: 11.0168445, lng: 76.9558321 }
    }
];

const Map = () => {
    const [activeMarker, setActiveMarker] = useState(null);

    const handleActiveMarker = (marker: any) => {
        if (marker === activeMarker) {
            return;
        }
        setActiveMarker(marker);
    };

    const handleOnLoad = (map: any) => {
        const bounds = new google.maps.LatLngBounds();
        markers.forEach(({ position }) => bounds.extend(position));
        map.fitBounds(bounds);
    };

    return (
        <GoogleMap
            zoom={10}
            onLoad={handleOnLoad}
            onClick={() => setActiveMarker(null)}
            mapContainerStyle={{ width: '100vw', height: '100vh' }}>
            {markers.map(({ id, name, position }) => (
                <Marker key={id} position={position} onClick={() => handleActiveMarker(id)}>
                    {activeMarker === id ? (
                        <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                            <div>{name}</div>
                        </InfoWindow>
                    ) : null}
                </Marker>
            ))}
        </GoogleMap>
    );
};

export default Map;
