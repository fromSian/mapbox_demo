<!--  -->
<template>
  <div>
    <el-popover placement="bottom" :width="auto" trigger="click">
      <template #reference>
        <el-button style="margin-right: 16px">Click to activate</el-button>
      </template>
      <el-row>
        <el-col :span="8">
          <el-input v-model="speed" autosize type="number" placeholder="0"
        /></el-col>
        <el-col :span="8"><el-button id="animate_line"></el-button></el-col>
      </el-row>
    </el-popover>
  </div>
</template>

<script lang="js">
import { reactive,toRefs,onMounted} from 'vue'
export default {
    name: '',
      setup() {
          const data = reactive({
                speed:0,
          })
          onMounted(() => {
          })
          const refData = toRefs(data);
          return {
              ...refData,
          }

      }
  };
</script>
<style>
#animate_line::after {
  content: "animate_line off";
}
#animate_line.show::after {
  content: "animate_line show";
}
</style>
