<!--动态线控制
速率
开始
停止 
关闭 -->
<template>
  <div>
    <el-drawer
      v-model="drawer"
      title="I am the title"
      direction="rtl"
      :before-close="handleClose"
    >
      <el-row>
        <el-col :span="2">
          <el-input v-model="speed" autosize type="number" placeholder="0"
        /></el-col>
        <el-col :span="2"><el-button id="animate_line"></el-button></el-col>
      </el-row>
    </el-drawer>
  </div>
</template>

<script lang="js">
import { reactive,toRefs,onMounted,watch} from 'vue'
export default {
    name: '',
    props: ['drawer_visible'],

      setup(props) {
          const data = reactive({
              speed:0,
              drawer:props.drawer_visible
          })
          onMounted(() => {
              console.log(131212,props.drawer_visible);

          })
          const refData = toRefs(data);
            watch(()=>props.drawer_visible,(newValue,oldValue)=>{
        console.log('drawer_visible',newValue);
        data.drawer=newValue
    })
          return {
              ...refData,
          }

      }
  };
</script>
<style scoped>
#animate_line::after {
  content: "animate_line off";
}

#animate_line.show::after {
  content: "animate_line show";
}
</style>
