import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import RoomsAndPrices from '../views/Rooms&Prices.vue'
import Rooms from '../components/app/Rooms/Rooms'
import Reserve from '../Layouts/Reserve.vue'
import BookingAndPayment from '../components/app/Booking&Payment/Booking&Payment.vue'
import Articles from '../views/Articles.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {layout: 'main'},
    component: Home,
  },
  {
    path: '/Rooms-Prices',
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
        path:'/Rooms-Prices/reserve',
        name:'Reserve',
        meta:{layout: 'main'},
        component: Reserve,
      },
      {
        path:'/Rooms-Prices/Booking',
        name:'Booking&Payment',
        meta:{layout: 'main'},
        component: BookingAndPayment,

      }
    ]

  },
  {
    path: '/Articles',
    name: 'Articles',
    meta: {layout: 'main'},
    component: Articles,
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
