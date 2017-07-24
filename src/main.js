// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import semantic from '../public/semantic/semantic.js'
import echarts from 'echarts'
import '../public/semantic/semantic.min.css'
import Validator from 'vue-validator'
Vue.use(Validator)
Vue.use(echarts)
Vue.config.productionTip = false
/* eslint-disable no-new */
// 内部组件
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
	App,
	semantic
  }
})
