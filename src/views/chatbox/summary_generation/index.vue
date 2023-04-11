<template>
  <div class="app-container">
    <iframe :src="src" id="myiframe" style="height: 100%;width: 100%" frameborder="0" scrolling="no"></iframe>
  </div>
</template>

<script>
export default {
  name: 'SummaryGeneration',
  data(){
    return {
      src: ''
    }
  },
  created() {
    this.$log.debug('hello, world')
  },
  mounted() {
    this.src = `${process.env.VUE_APP_BASE_API}${process.env.VUE_APP_GRADIO_PORT}?__theme=light`
    /**
     * iframe-宽高自适应显示
     */
    // const oIframe = document.getElementById('bdIframe')
    // const deviceWidth = document.documentElement.clientWidth
    // const deviceHeight = document.documentElement.clientHeight
    // oIframe.style.width = (Number(deviceWidth) - 220) + 'px' // 数字是页面布局宽度差值
    // oIframe.style.height = (Number(deviceHeight) - 120) + 'px' // 数字是页面布局高度差
  }
}
</script>

<style scoped>
.app-container {
  position: absolute;
  height: 100%;
  width: 100%;
}
</style>
