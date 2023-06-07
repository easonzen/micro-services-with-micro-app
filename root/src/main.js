import Vue from 'vue'
import App from './App.vue'
import routes from './router'
import microApp from '@micro-zoe/micro-app'

Vue.config.productionTip = false

microApp.start()

const router = new VueRouter({
  mode: 'history',
  routes,
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
