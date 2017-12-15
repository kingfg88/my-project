// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import $ from 'jquery'
import router from './routers'
import VueResource from 'vue-resource'
import store from './vuex/store'

Vue.use(VueResource)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,  // 注入到根实例中
  store,//使用store
  render: h => h(App),
  template: '<App/>',
  components: { App }
})
