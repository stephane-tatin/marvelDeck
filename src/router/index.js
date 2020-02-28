import Vue from 'vue'
import VueRouter from 'vue-router'
import characterCards from '../components/CharacterCard.vue'
import comicsCard from '../components/ComicsCard.vue'
import register from '../components/register.vue'
import signUp from '../components/SignUp.vue'
import chat from '../components/chat.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'characterCards',
    component: characterCards
  },

  {
    path: '/chat',
    name: 'chat',
    component: chat,
   meta : {
     requiresAuth: true
   }
  },
  {
    path: '/register',
    name: 'register',
    component: register
  },
  {
    path: '/signup',
    name: 'signUp',
    component: signUp
  },
  {
    path: '/:id',
    name: 'comicsCard',
    component: comicsCard
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
