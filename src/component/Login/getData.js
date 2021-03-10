import React from 'react';
import fetchWithAuth from './fetchWithAuth';



function getData() {
    // eslint-disable-next-line no-undef
    return fetchWithAuth('api/data', options)
}
export default getData;