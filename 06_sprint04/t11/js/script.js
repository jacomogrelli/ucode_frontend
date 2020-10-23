/* -------------------------------------------------------------------------- */
/*                                                                            */
/*   Map geolocation. sprint04. t11                                           */
/*                                                                            */
/*   By: Oleksiy Nechaiev <nechaeff@gmail.com>                                */
/*                        <t.me/losini>                                       */
/*   Created: 2020/10/23 15:22 (24H)                                          */
/*   Finished: 2020/10/23 17:19 (24H)                                         */
/*                                                                            */
/*   ucode IT academy <ucode.world>                                           */
/*   Je sues 42, nous sommes 42                                               */
/*                                                                            */
/*   Topics: API Introduction                                                 */
/*                                                                            */
/* -------------------------------------------------------------------------- */
'use strict'

/* default map */
mapboxgl.accessToken = 'pk.eyJ1IjoiamFjb21vZ3JlbGxpIiwiYSI6ImNrZ204YXplNzBpbTQyeW8xN2NuczRtZWEifQ.-5wU-Tr3XVuEdUMOveWcbQ';

let coordinates = document.getElementById('coordinates');
let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/dark-v10', // stylesheet location
  center: [165.973, -50.604167], // starting position [lng, lat]
  zoom: 13 // starting zoom
});

/* change coordinates on map move */
map.on('move', () => {
  let { lng, lat } = map.getCenter();

  coordinates.innerHTML = `Longitude: ${lng}<br />Latitude: ${lat}`;
});

let marker = new mapboxgl.Marker({
  draggable: true
}).setLngLat([165.973, -50.604167]).addTo(map);

/* add search */
map.addControl(
  new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl
  })
).on('result', () => marker?.remove());

/* Add geolocate control to the map */
map.addControl(
  new mapboxgl.GeolocateControl({
    positionOptions: {
      enableHighAccuracy: true
    },
    trackUserLocation: true
  })
);

/* Add zoom and rotation controls to the map */
map.addControl(new mapboxgl.NavigationControl());
