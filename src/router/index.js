import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'
import RecuPass from '../views/RecuPass.vue'
import AdminUserList from '../views/AdminUserList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/AdminUserList',
    name: "adminuserlist",
    component: AdminUserList
  },
  {
    path: '/SignIn',
    name: 'signin',
    component: SignIn
  },
  {
    path: '/SignUp',
    name: 'signup',
    component: SignUp
  },
  {
    path:'/RecuPass',
    name: 'recupass',
    component: RecuPass
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
