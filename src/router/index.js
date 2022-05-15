import { createRouter, createWebHistory } from 'vue-router'
import movieRouter from './movie'
import cinemaRouter from './cinema'
import mineRouter from './mine'

const routes = [
    movieRouter,
    cinemaRouter,
    mineRouter,

    //重定向，当上面所有都不匹配的时候，重定向到movie
    {
      path : '/*',
      redirect : '/movie'
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
