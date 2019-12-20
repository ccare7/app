import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Index from '../views/Index.vue'
import Login from '../views/Login.vue'
import Main from '../views/main.vue'
import Property from '../views/Property.vue'
import Dashboard from '../views/Dashboard'
import Borrow from '../views/Borrow'
import Collaruse from "../views/Collaruse";
Vue.use(VueRouter)

const routes = [
  {
    path:'/index',
    name:"index",
    component:Index
  },
  {
    path:'/login',
    name:"login",
    component:Login
  },
  {
    path:'/main',
    name:"main",
    component:Main,
    children:[{
      path:'property',
      name:"property",
      component:Property
    },{
      path:'dashboard',
      name:'dashboard',
      component: Dashboard
    },{
      path:'borrow',
      name:'borrow',
      component: Borrow
    },{
      path:'collaruse',
      name:'collaruse',
      component: Collaruse
    }]
  }
]

const router = new VueRouter({
  routes
})

export default router
