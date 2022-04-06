<!--  -->
<template>
  <div>
    <el-popover placement="bottom" :width="200" v-model:visible="visible">
      <template #reference>
        <el-button style="margin-right: 16px" @click="get_line_status()"
          >animate_line</el-button
        >
      </template>
      <el-row>
        <el-col :span="8">
          <div class="margin-div">
            <el-input
              v-model="speed"
              autosize
              type="number"
              placeholder="0"
              id="speed"
            /></div
        ></el-col>
        <el-col :span="8"
          ><div class="margin-div">
            <el-button
              id="animate_line"
              ref="animate_line_button"
            ></el-button></div
        ></el-col>
      </el-row>
    </el-popover>
  </div>
</template>

<script lang="js">
import { reactive,toRefs,onMounted,toRaw} from 'vue'
import { useStore } from "vuex";
import layers from './kindslayers.js'
export default {
    name: '',
      setup(props) {
          const data = reactive({
            visible:false,
                speed:0,
          });
          const store = useStore();
          onMounted(() => {

          })
          const refData = toRefs(data);
          const get_line_status=()=>{
            data.visible = !data.visible
            console.log('visible',data.visible);
            let map =toRaw(store.state.map)
            console.log('map',map);
            map.addControl(new mapboxgl.FullscreenControl());
            map.loadImage(
'https://docs.mapbox.com/mapbox-gl-js/assets/cat.png',
(error, image) => {
if (error) throw error;

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
}
);
let geojson = {
  "type": "FeatureCollection",
  "features": [{
  "type": "Feature",
  "geometry": {
  "type": "LineString",
  "coordinates": [
  [0, 0]
  ]
  }
  }]
  };
  map.addSource("line", {
    type: "geojson",
    data: geojson,
  });

  // add the line which will be modified in the animation
  map.addLayer({
    id: "line-animation",
    type: "line",
    source: "line",
    layout: {
      "line-cap": "round",
      "line-join": "round",
    },
    paint: {
      "line-color": "#ed6498",
      "line-width": 5,
      "line-opacity": 0.8,
    },
  });
  
          }
          return {
              ...refData,
              get_line_status
          }

      }
  };
</script>
<style>
#animate_line::after {
  content: "off";
}
#animate_line.show::after {
  content: "show";
}
.margin-div {
  margin: 5px;
}
</style>
