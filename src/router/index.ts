import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import School from '../views/School.vue';
import Login from '../views/Login.vue';
import calculaidadeinator from '../views/calculaidadeinator.vue';


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/Login'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/school',
    name: 'School',
    component: School
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/calculaidadeinator',
    name: 'calculaidadeinator',
    component: calculaidadeinator
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
