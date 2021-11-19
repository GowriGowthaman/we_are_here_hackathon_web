import React from 'react';

import { useLoadScript } from '@react-google-maps/api';

import Map from './Map';

const GoogleApp = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: 'AIzaSyA9qviU5kSvtIXNfw6x5b7mkTEd3h3nP_M'
    });

    return isLoaded ? <Map /> : null;
};

export { GoogleApp };
