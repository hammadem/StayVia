const el = document.createElement('div');
el.className = 'marker';

mapboxgl.accessToken = accesstoken;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    center: coordiLoc, // starting position [lng, lat]. Note that lat must be set between -90 and 90
    zoom: 12 // starting zoom
});
map.addControl(new mapboxgl.NavigationControl());
map.scrollZoom.disable();

window.addEventListener('resize', () => {
    map.resize();
  });
  

const popup = new mapboxgl.Popup({ offset: 25 })
.setHTML(`<h5>${listingLocation}</h5><h6>Exact location provided after booking</h6>`);

const marker = new mapboxgl.Marker(el)
        .setLngLat(coordiLoc)
        .addTo(map)
        .setPopup(popup);
