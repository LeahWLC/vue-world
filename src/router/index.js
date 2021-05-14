import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Theme from '../views/Theme.vue';
import Question from '../views/Question.vue';
import Result from '../views/Result.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/theme',
    name: 'theme',
    component: Theme
  },
  {
    path: '/question/:no',
    name: 'question',
    component: Question,
    props: true 
  },
  {
    path: '/result/:res',
    name: 'result',
    component: Result
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
