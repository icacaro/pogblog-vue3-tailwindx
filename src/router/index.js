import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import ('../views/PaginaPrincipal.vue')
    },
    {
      path: '/post/:id',
      name: 'Post',
      component: () => import ('../views/Postagem.vue')
    },
  ]
})

export default router
