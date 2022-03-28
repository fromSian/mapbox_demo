export default function () {
  mapboxgl.accessToken =
    "pk.eyJ1Ijoic2lhbjEyIiwiYSI6ImNsMHFiNzE2cjI4bGwzaW41aHE3bWJmMnEifQ._HOz562SugTkbgaH5Zlxog";
  const map = new mapboxgl.Map({
    container: "mapDiv", // container ID
    style: "mapbox://styles/mapbox/streets-v11", // style URL
    center: [116, 40], // starting position
    zoom: 2, // starting zoom
  });

  // Add zoom and rotation controls to the map.
  map.addControl(new mapboxgl.NavigationControl());
  return {
    map
  }
}
