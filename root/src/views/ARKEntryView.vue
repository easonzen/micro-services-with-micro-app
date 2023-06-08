<template>
  <div>
    <h1>ARK子应用</h1>
    <!-- 
      name(必传)：应用名称
      url(必传)：应用地址，会被自动补全为http://localhost:5000/index.html
     -->
    <micro-app name="ark" url="http://localhost:5000" baseroute="/ark" iframe></micro-app>
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
