import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import PeopleList from '../components/PeopleList.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/people', component: PeopleList }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
