import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/HomeView.vue'
import RMSEntry from '../views/RMSEntryView.vue'

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
  }
]

export default routes
