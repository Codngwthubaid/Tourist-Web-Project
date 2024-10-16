"use client"
import { useEffect, useRef } from 'react';

const useGoogleMap = (params = { q: 'India' }) => {
  const mapContainer = useRef(null);

  useEffect(() => {
    const checkParams = (params) => {
      let str = '';
      for (let key in params) {
        str += '&' + key + '=' + params[key];
      }
      return str;
    };

    const displayMap = () => {
      const iframe = document.createElement('iframe');
      iframe.style.border = '0';
      iframe.style.width = '100vw';
      iframe.style.height = '100vh';
      iframe.loading = 'lazy';
      iframe.allowFullScreen = true;
      iframe.referrerPolicy = 'no-referrer-when-downgrade';
      iframe.src = `https://www.google.com/maps/embed/v1/place?key=AIzaSyCV-im_l-AEXmGhpSytEhqMOf2Gy6dB80g${checkParams(
        params
      )}`;

      mapContainer.current.innerHTML = '';
      mapContainer.current.appendChild(iframe);
    };

    displayMap();
  }, [params]);

  return { mapContainer };
};

export default useGoogleMap;