import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './router'
import microApp from '@micro-zoe/micro-app'

Vue.config.productionTip = false

microApp.start({
  'disable-memory-router': true // 关闭虚拟路由
})

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
