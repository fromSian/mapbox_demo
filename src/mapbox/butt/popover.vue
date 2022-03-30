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
import layers from './kindslayers.js'
export default {
    name: '',
    props: ["map"],
      setup(props) {
          const data = reactive({
            visible:false,
                speed:0,
          })
          onMounted(() => {

          })
          const refData = toRefs(data);
          const get_line_status=()=>{
            data.visible = !data.visible
            console.log('visible',data.visible);
            
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
