// NearbyHospitals.js
import React, { useEffect } from 'react';
// import{Map, GoogleApiWrapper} from 'google-maps-react';
import './NearbyHospitals.css';

const Pharmacy = () => {
  useEffect(() => {
    // Load Google Maps API script dynamically
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyB_zBgZWMQrhSa-I-vctxNSPh6bKco_kCc&libraries=places&callback=initMap`;
    script.defer = true;
    script.async = true;
    document.head.appendChild(script);

    // Clean up the script tag on component unmount
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  // Callback function for initializing the map
  window.initMap = () => {
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: -34.397, lng: 150.644 }, // Default center (Sydney, Australia)
      zoom: 15,
    });

    // Use the Places API to search for nearby hospitals
    const placesService = new window.google.maps.places.PlacesService(map);
    placesService.nearbySearch({
      location: map.getCenter(),
      radius: 10000, // Search within a radius of 5000 meters (adjust as needed)
      type: 'pharmacy',
    }, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        for (const place of results) {
          createMarker(place);
        }
      }
    });

    function createMarker(place) {
      const marker = new window.google.maps.Marker({
        map,
        position: place.geometry.location,
        title: place.name,
      });

      const infowindow = new window.google.maps.InfoWindow({
        content: `<strong>${place.name}</strong><br>${place.vicinity}`,
      });

      marker.addListener('click', () => {
        infowindow.open(map, marker);
      });
    }
  };

  return (
    <div className="nearby-hospitals">
      <h1>Nearby Pharmacy Map</h1>
      <div id="map" className="map-container"></div>
    </div>
  );
};

export default Pharmacy;
