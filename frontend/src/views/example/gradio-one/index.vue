<template>
  <div class="app-container">
    <script
      type="module"
      src="https://gradio.s3-us-west-2.amazonaws.com/3.23.0/gradio.js"
    ></script>
    <div class="gradio-container">
      <gradio-app src="https://aprilies-gradio-demo.hf.space"></gradio-app>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gradio',
  created() {
    this.$log.debug('hello, world')
  }
}
</script>

<style scoped>
.gradio-container{
  width:50%;
  height:500px;
}
</style>
