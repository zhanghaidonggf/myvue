import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello'
import Index from '../components/Index'
import Road from '../components/Road'
import Hobby from '../components/Hobby'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path:'/road',
      name:'Road',
      component:Road
    },
    {
      path:'/hobby',
      name:'Hobby',
      component:Hobby
    }
  ]
})
