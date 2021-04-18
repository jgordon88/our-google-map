const MAPBOX_ACCESS_TOKEN ='pk.eyJ1IjoiamdvcmRvbjg4IiwiYSI6ImNrbm1henNqOTBvejcyb21vcjRxYm9zZWwifQ.ESrdn-WL_FR6BQSEcDokUg' 

var map = new mapboxgl.Map({
  accessToken: MAPBOX_ACCESS_TOKEN,
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11"
  })

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true
})

function setupMap(centerPosition){
  const map = new mapboxgl.Map({
    accessToken: MAPBOX_ACCESS_TOKEN,
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: centerPosition,
    zoom: 15
  })
}

// Add zoom and rotation controls to the map.
const navigationControls = new mapboxgl.NavigationControl();
map.addControl(navigationControls)

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude])
  console.log(position)
}

function errorLocation() {
  setupMap([-77.0388256, 38.8999965])
}