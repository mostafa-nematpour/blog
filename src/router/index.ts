import { createRouter, createWebHashHistory } from 'vue-router'
import BlogsView from '../views/BlogsView.vue'
import BlogView from '../views/BlogView.vue'
import NotFound from '../views/NotFound.vue'

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: BlogsView
    },
    {
      path: '/blogs',
      name: 'blogs-list',
      component: BlogsView
    },
    {
      path: '/blogs/:id(\\d+)/:slug?',
      name: 'blog',
      component: BlogView
    },
    {
      path: '/404',
      name: 'NotFound',
      component: NotFound
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})

export default router
