<template>
  <div>
    <h2>Cpn组件标题</h2>
    <p>Cpn内容</p>
    <h3>{{name}}</h3>
  <button>webpack-dev-server测试</button>
  </div>
</template>

<script>
export default {
  name: "Cpn",
  data() {
    return {
      name: "Tom cpn",
      message: "Cpn message"
    };
  }
};
</script>

<style scoped>
</style>