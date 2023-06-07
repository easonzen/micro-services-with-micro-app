import './public-path'
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './router'

const router = new VueRouter({
  mode: 'history',
  // 👇 __MICRO_APP_BASE_ROUTE__ 为micro-app传入的基础路由
  base: window.__MICRO_APP_BASE_ROUTE__ || process.env.BASE_URL,
  routes
})

Vue.config.productionTip = false

const app = new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')

// 监听卸载操作
window.addEventListener('unmount', function () {
  app.$destroy()
})
