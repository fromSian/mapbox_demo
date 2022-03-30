<template>
  <el-container>
    <el-header
      ><el-row>
        <el-col :span="24"
          ><div class="transparent">
            <popover :map="map" /></div></el-col
      ></el-row>
    </el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-main>
          <el-row>
            <el-col :span="24"
              ><div class="grid-content bg-purple-dark" id="mapDiv"
            /></el-col>
          </el-row>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script lang="js">
import { reactive,toRefs,onMounted,toRaw} from 'vue'
import control from './control.js'
import popover from './butt/popover'
export default {
    name: 'map_first',
    components: {
      popover
    },
      setup() {
        let init=null;
          const data = reactive({
            map:null
          })
          onMounted(() => {
              init=control()
              data.map=init.map
              let map=init.map
            console.log('map',map);
                            map.on('load', () => {
    // Add a data source containing GeoJSON data.
    map.addSource('maine', {
    'type': 'geojson',
    'data': {
    'type': 'Feature',
    'geometry': {
    'type': 'Polygon',
    // These coordinates outline Maine.
    'coordinates': [
    [
    [-67.13734, 45.13745],
    [-66.96466, 44.8097],
    [-68.03252, 44.3252],
    [-69.06, 43.98],
    [-70.11617, 43.68405],
    [-70.64573, 43.09008],
    [-70.75102, 43.08003],
    [-70.79761, 43.21973],
    [-70.98176, 43.36789],
    [-70.94416, 43.46633],
    [-71.08482, 45.30524],
    [-70.66002, 45.46022],
    [-70.30495, 45.91479],
    [-70.00014, 46.69317],
    [-69.23708, 47.44777],
    [-68.90478, 47.18479],
    [-68.2343, 47.35462],
    [-67.79035, 47.06624],
    [-67.79141, 45.70258],
    [-67.13734, 45.13745]
    ]
    ]
    }
    }
    });

    // Add a new layer to visualize the polygon.
    map.addLayer({
    'id': 'maine',
    'type': 'fill',
    'source': 'maine', // reference the data source
    'layout': {},
    'paint': {
    'fill-color': '#0080ff', // blue color fill
    'fill-opacity': 0.5
    }
    });
    // Add a black outline around the polygon.
    map.addLayer({
    'id': 'outline',
    'type': 'line',
    'source': 'maine',
    'layout': {},
    'paint': {
    'line-color': '#000',
    'line-width': 3
    }
    });
  })
          })
          const refData = toRefs(data);
          return {
              ...refData,
          }

      }
  };
</script>

<style>
.top {
  height: 200px;
  width: 600px;
  background-color: #333;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  line-height: 8vh;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  line-height: 20vh;
}

body > .el-container {
  margin-bottom: 2vh;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 20px;
}
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-transparent {
  background-color: rgba(0, 0, 0, 0);
  border: solid black 2px;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 89vh;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.transparent {
  margin-bottom: px;
}
</style>
