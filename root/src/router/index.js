import Vue from 'vue'
import VueRouter from 'vue-router'
import RMSEntry from '../views/rms-entry.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/rms/*',
    name: 'rms',
    component: RMSEntry,
  },
]

export default routes