import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './vuex/store'
import {setCookie,getCookie} from './cookie.js'

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
        path: "/login",
        component: login,
    },
    {
        path: "/msg",
        component: msg,
        meta:{
            auth: true // 这里设置，当前路由需要校验
        }
    },
    {
        path: "/my",
        component: my,
        meta:{
            auth: true // 这里设置，当前路由需要校验
        }
    }
]

const router = new VueRouter({
      routes
})

// 设置动态路由
router.beforeEach((to,from,next)=>{
    if(to.path==='./lgoin'){
        next();
    }else{
        if(to.meta.auth && !getCookie('username')) { 
            next({path:'./login'})
        }else{
            next()
        }
    }
})

export default router; //将路由器导出

