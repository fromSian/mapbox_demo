<!--  -->
<template>
  <div>
      <!-- <button id='animate_line'></button> -->
      
      <el-button id='animate_line'></el-button>
  </div>
</template>

<script>
import { reactive,toRefs,onMounted} from 'vue'
export default {
    name: 'animate_line_control',
      setup() {
          const data = reactive({

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
<style scoped>
#animate_line::after {
content: 'animate_line off';
}
 
#animate_line.show::after {
content: 'animate_line show';
}
#animate_line{
  z-index: 999;
}
</style>