import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/HomeView.vue'
import RMSEntry from '../views/RMSEntryView.vue'
import ARKEntry from '../views/ARKEntryView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/rms*',
    name: 'rms',
    component: RMSEntry
  },
  {
    path: '/ark*',
    name: 'ark',
    component: ARKEntry
  }
]

export default routes
