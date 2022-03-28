<!--  -->
<template>
  <layout />
</template>

<script>
import { reactive, toRefs, onMounted } from "vue";
import layout from "./mapbox/layout.vue";
export default {
  name: "",
  components: { layout },
  setup() {
    const data = reactive({});
    onMounted(() => {
      //   control()
    });
    const refData = toRefs(data);
    return {
      ...refData,
    };
  },
};
</script>
<style>
html,
body {
  margin: 0;
  height: 100vh;
}
</style>
