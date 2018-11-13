import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/homePage'

import signin from '../components/signin';

import signout from '../components/signout';

import booking from '../components/booking.vue';

import bookingnow from '../components/bookingnow.vue';

import reviews from '../components/reviews.vue';

import reviews2 from '../components/review2.vue';

import aboutus from '../components/about.vue';


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/about",
      component:aboutus
    },
    {
      path:"/booknow/:roomno",
      component:bookingnow
    },
    {
      path:"/review/:rating",
      component:reviews2
    },
    {
      path:"/reviews",
      name:"Reviews",
      component:reviews
    },
    {
      path: '/',
      name: 'homePage',
      component: HelloWorld, 
    },
    {
      path:"/signin",
      component:signin
    },
    {
      path:"/signout",
      component:signout
    },
    {
      path:"/booking",
      component:booking
    }

  ]
})
