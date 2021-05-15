//====================MAP================
// API Access Token
const MAPBOX_ACCESS_TOKEN ='pk.eyJ1IjoiYWJkaWFkZW4iLCJhIjoiY2tubWF4eHRwMG9wbDJ2cDhqZnJha3lwcSJ9.3j5-R7CM8iTA6NbMMn2i7w' 

// GeoLocation
navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true
})


// Zoom and rotation controls
function setupMap(centerPosition){
  const map = new mapboxgl.Map({
    accessToken: MAPBOX_ACCESS_TOKEN,
    container: "map",
    style: "mapbox://styles/abdiaden/cknowan3g0o0017qpaoac6e0b",
    center: centerPosition,
    zoom: 15
  })



const navigationControls = new mapboxgl.NavigationControl()
map.addControl(navigationControls);

const directionControls = new MapboxDirections({
  accessToken: MAPBOX_ACCESS_TOKEN
})
map.addControl(directionControls, "top-left")
}


// User Location/Default loaction
function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude])
  console.log(position)
}

function errorLocation() {
  setupMap([-77.0388256, 38.8999965])
}
// =============Trip Planner================


// 1. Select all elements
const form = document.querySelector("#new-item-form")
const list = document.querySelector("#list")
const input = document.querySelector("#item-input")

// 2. Submit form add new element
form.addEventListener("submit", e => {
  e.preventDefault()

  // 1. Create new item
  const item = document.createElement("div")
  item.innerText = input.value
  item.classList.add("list-item")

  // 2. Add item to list
  list.appendChild(item)

  // 3. Clear input
  input.value = ""

  // 4. Setup event listener/delete item when clicked
  item.addEventListener("click", () => {
    item.remove()
  })
})