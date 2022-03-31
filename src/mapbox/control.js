import { useStore } from "vuex";
export default function () {
  const store = useStore();
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
  store.commit("setMap", map);
  //用button addlayers
  let addlayer_button = document.getElementById('addlayer')
  addlayer_button.addEventListener("click", () => {
    console.log('fsdkjflsdkhg');

       
      // Add the image to the map style.
      map.addImage('cat', image);
       
      // Add a data source containing one point feature.
      map.addSource('point', {
      'type': 'geojson',
      'data': {
      'type': 'FeatureCollection',
      'features': [
      {
      'type': 'Feature',
      'geometry': {
      'type': 'Point',
      'coordinates': [-77.4144, 25.0759]
      }
      }
      ]
      }
      });
       
      // Add a layer to use the image to represent the data.
      map.addLayer({
      'id': 'points',
      'type': 'symbol',
      'source': 'point', // reference the data source
      'layout': {
      'icon-image': 'cat', // reference the image
      'icon-size': 0.25
      }
      });
//有那个 map.loadImage 才出来的
      //可能是已经加进去了，但是没在map上显示 map.layers看看
      //mapbox layerlist
  });
  return {
    map
  }
}
