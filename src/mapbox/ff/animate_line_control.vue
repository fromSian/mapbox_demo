<!--  -->
<template>
  <div>
      <!-- <button id='animate_line'></button> -->
      
      <!-- <el-button id='animate_line'></el-button> -->
      <!-- <el-button id='draw_button' @click="changeDrawerStatus">open drawer</el-button> -->
      <!-- <pop :drawer_visible='drawer'/> -->
  </div>
</template>

<script>
import { reactive,toRefs,onMounted} from 'vue'
import pop from './pop.vue'
export default {
    // name: 'animate_line_control',
    // components:{
    //   pop
    // },
    //   setup() {
    //       const data = reactive({
    //         drawer:true
    //       })
    //       onMounted(() => {
    //       })
    //       const refData = toRefs(data);
    //       const changeDrawerStatus=()=>{
    //         data.drawer=!data.drawer
    //         // console.log('drawer',data.drawer);
    //       }
    //       return {
    //           ...refData,
    //           changeDrawerStatus
    //       }

    //   }
  };
</script>
<style scoped>
/* #animate_line::after {
content: 'animate_line off';
}
 
#animate_line.show::after {
content: 'animate_line show';
}
#animate_line{
  z-index: 999;
} */
</style>