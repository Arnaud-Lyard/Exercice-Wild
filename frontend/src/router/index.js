import { createRouter, createWebHistory } from 'vue-router'
import TodosView from '../views/TodosView.vue'
import TodosDetail from '../views/TodosDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Todos',
      component: TodosView
    },
    {
      path: '/:id',
      name: 'TodosDetail',
      component: TodosDetail,
      props: true
    }
  ]
})

export default router
