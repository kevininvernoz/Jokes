import { createRouter, createWebHistory } from 'vue-router'
import JokeView from '../views/Joke.vue'
import HistoryView from '@/views/History.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Joke',
      component: JokeView,
    },
    {
      path: '/history',
      name: 'history',
      component: HistoryView,
    },
    
  ],
})

export default router
