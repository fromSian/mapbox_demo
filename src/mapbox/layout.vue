<template>
  <el-container>
    <el-header
      ><el-row>
            <el-col :span="24"
              ><div class="transparent"
            /><control_button/></el-col></el-row>
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
import { reactive,toRefs,onMounted} from 'vue'
import control_button from './animate_line_control.vue'
import animate_line from '../util/animate_line.js'
import control from './control'
import move from './move.js'
export default {
    name: 'map_first',
    components: {
      control_button,
    },
      setup() {
        let map=null;
        let init=null;
          const data = reactive({

          })
          onMounted(() => {
              init=control()
              map=init.map
              animate_line(map)
          })
          const refData = toRefs(data);
          return {
              ...refData,
          }

      }
  };
</script>

<style>
.top{
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
.bg-transparent{
  background-color: rgba(0,0,0,0);
  border:solid black 2px
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
</style>
