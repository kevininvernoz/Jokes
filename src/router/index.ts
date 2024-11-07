import { createRouter, createWebHistory } from 'vue-router'
import Joke from '@/views/Joke.vue'
import History from '@/views/History.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Joke',
      component: Joke,
    },
    {
      path: '/history',
      name: 'history',
      component: History,
    },
    
  ],
})

export default router