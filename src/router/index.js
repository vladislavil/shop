import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home'
import Book from '../views/book'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/book/:id',
    name: 'Book',
    component: Book
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
