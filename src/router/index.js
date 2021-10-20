import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import RoomsAndPrices from '../views/Rooms&Prices.vue'
import Rooms from '../components/app/Rooms.vue'
import Reserve from '../components/app/Reserve'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {layout: 'main'},
    component: Home,
  },
  {
    path: '/Rooms&Prices',
    name: 'roomsprices',
    meta: {layout: 'main'},
    component: RoomsAndPrices,
    children:[
      {
        path: '',
        name: 'Rooms',
        meta:{layout: 'main'},
        component: Rooms,
      },
      {
        path:'/Rooms&Prices/reserve',
        name:'reserve',
        meta:{layout: 'main'},
        component: Reserve,

      }
    ]

  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
