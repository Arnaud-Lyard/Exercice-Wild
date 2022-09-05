import { createRouter, createWebHistory } from 'vue-router'
import NamesView from '../views/NamesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Names',
      component: NamesView
    }
  ]
})

export default router
