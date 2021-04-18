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

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude])
  console.log(position)
}

function errorLocation() {
  setupMap([38.90, 77.03])
}