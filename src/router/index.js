import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello'
import Index from '../components/Index'
import Road from '../components/Road'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path:'/road',
      name:'Road',
      component:Road
    }
  ]
})
