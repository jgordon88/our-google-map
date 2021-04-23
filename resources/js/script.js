const MAPBOX_ACCESS_TOKEN ='pk.eyJ1IjoiYWJkaWFkZW4iLCJhIjoiY2tubWF4eHRwMG9wbDJ2cDhqZnJha3lwcSJ9.3j5-R7CM8iTA6NbMMn2i7w' 


navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true
})

function setupMap(centerPosition){
  const map = new mapboxgl.Map({
    accessToken: MAPBOX_ACCESS_TOKEN,
    container: "map",
    style: "mapbox://styles/abdiaden/cknowan3g0o0017qpaoac6e0b",
    center: centerPosition,
    zoom: 15
  })


// Add zoom and rotation controls to the map.
const navigationControls = new mapboxgl.NavigationControl()
map.addControl(navigationControls);

const directionControls = new MapboxDirections({
  accessToken: MAPBOX_ACCESS_TOKEN
})
map.addControl(directionControls, "top-left")
}


function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude])
  console.log(position)
}

function errorLocation() {
  setupMap([-77.0388256, 38.8999965])
}