import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
let modules = {
    // 自己的模块代码 其它代码就不写了。。同vuex模块
    state:{ authorizd:true },
    getters:{
        authorizd: state => state.authorizd
    },
    actions: { 
        login({commit},payload){
            // ajax 登陆流程，
            commit("login", 登陆信息)
        }
    },
    mutations:{
        login(state,loginInfo){
            state.authorizd = loginInfo // 假定登陆成功后，设置 state.
        }
    }
}
export default new Vuex.Store({
    modules: modules
})