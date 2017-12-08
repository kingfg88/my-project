import Vue from 'vue';
import VueRouter from 'vue-router';

import home from './components/home'
import find from './components/find'
import msg from './components/msg'
import login from './components/login'
import my from './components/my'


Vue.use(VueRouter);

// const router = new VueRouter(); //这里可以带有路由器的配置参数

const routes = [
	{
        path: '/', 
        redirect: '/home' 
    },
    {
        path:"/home",
        component: home
    },
    {
        path: "/find",
        component: find
    },
    {
        path: "/msg",
        component: msg
    },
    {
        path: "/login",
        component: login
    },
    ,
    {
        path: "/my",
        component: my
    }
]

const router = new VueRouter({
      routes // routes: routes 的简写
})

export default router; //将路由器导出

// const app = new Vue({
//   router
// }).$mount('#app')

