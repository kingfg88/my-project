// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import $ from 'jquery'
import router from './routers'
import VueResource from 'vue-resource'
import store from './vuex/store'
import Mint from 'mint-ui'
import axios from 'axios'
import 'mint-ui/lib/style.css'
import './style/index.css'
// axios.defaults.baseURL = 'http://127.0.0.1:3000';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

Vue.prototype.$http = axios

Vue.use(Mint)
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
