import { createRouter, createWebHistory } from 'vue-router'
import navbar from '@/router/navbar'

const routes = [
    ...navbar,
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
