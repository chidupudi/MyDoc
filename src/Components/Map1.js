import React, { useEffect, useRef } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const PharmacyMap = (props) => {
  const mapRef = useRef(null);

  useEffect(() => {
    initializeMap();
  }, []);

  const initializeMap = () => {
    const pyrmont = new props.google.maps.LatLng(-33.866743, 151.187569);

    mapRef.current = new props.google.maps.Map(document.getElementById('map'), {
      center: pyrmont,
      zoom: 15,
    });

    const input = document.getElementById('SearchTextField');
    const autocomplete = new props.google.maps.places.Autocomplete(input);
    autocomplete.bindTo('bounds', mapRef.current);

    const marker = new props.google.maps.Marker({
      map: mapRef.current,
    });

    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      console.log(place);
      console.log(place.photos[0]?.getUrl()); // Ensure photos[0] exists before calling getUrl

      if (place.geometry.viewport) {
        mapRef.current.fitBounds(place.geometry.viewport);
      } else {
        mapRef.current.setCenter(place.geometry.location);
        mapRef.current.setZoom(17);
      }
      marker.setPosition(place.geometry.location);
      marker.setVisible(true);

      const request = {
        location: place.geometry.location,
        radius: 50000,
        type: ['pharmacy'], // Change type to 'pharmacy'
      };

      const service = new props.google.maps.places.PlacesService(mapRef.current);
      service.nearbySearch(request, callback);
    });
  };

  const callback = (results, status) => {
    if (status === props.google.maps.places.PlacesServiceStatus.OK) {
      for (let i = 0; i < results.length; i++) {
        createMarker(results[i]);
      }
    }
  };

  const createMarker = (place) => {
    const marker = new props.google.maps.Marker({
      map: mapRef.current,
      position: place.geometry.location,
    });

    props.google.maps.event.addListener(marker, 'click', () => {
      alert(place.name);
      window.open(place.photos[0]?.getUrl(), '_blank'); // Ensure photos[0] exists before calling getUrl
    });
  };

  return (
    <div>
      <input id="SearchTextField" type="text" size="50" />
      <div id="map" style={{ height: '500px' }}></div>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB_zBgZWMQrhSa-I-vctxNSPh6bKco_kCc',
})(PharmacyMap);
