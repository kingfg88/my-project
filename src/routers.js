import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './vuex/store'
import {setCookie,getCookie} from './cookie.js'

import home from './components/home'
import find from './components/find'
import msg from './components/msg'
import login from './components/login'
import my from './components/my'

import style from './components/template/style'
import allstyle from './components/template/allstyle'
import details from './components/template/details'


Vue.use(VueRouter);


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
        path:'/style',
        component:style,
    },
    {
        path:'/allstyle',
        component:allstyle
    },
    {
        path:'/details',
        component:details
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
// router.beforeEach((to,from,next)=>{
//     if(Object.keys(to.params).length === 0){
//         Object.assign(to.params,store.state.paramMap[to.name]||{})
//     }
//     store.commit('refreshparam',{key:to.name,value:to.params})
//     next();
// })
// 设置返回动画
router.goBack = function () { 
　　this.isBack = true
　　window.history.go(-1)
}

export default router; //将路由器导出

