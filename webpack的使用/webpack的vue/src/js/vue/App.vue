/* 这里是模板 */
<template>
  <div>
    <h2 class="title">{{ message }}</h2>
    <button @click="btnClick">按钮</button>
    <h2>{{ name }}</h2>
    <Cpn/>
  </div>
</template>
/* 这里是js代码 */
<script>
import Cpn from "./Cpn.vue";
export default {
  name: "App",
  components: {
    Cpn
  },
  data() {
    return {
      message: "hello",
      name: "tom"
    };
  },
  methods: {
    btnClick() {
      console.log("App");
    }
  }
};
</script>
/* 这里是样式代码 */
<style scoped>
.title {
  color: red;
}
</style>