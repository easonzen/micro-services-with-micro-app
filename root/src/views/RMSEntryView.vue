<template>
  <div>
    <h1>RMS子应用</h1>
    <!-- 
      name(必传)：应用名称
      url(必传)：应用地址，会被自动补全为http://localhost:4000/index.html
     -->
    <micro-app name="rms" url="http://localhost:4000/" baseroute="/rms"></micro-app>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
