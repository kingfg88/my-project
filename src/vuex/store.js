import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state:{
		msg:'',
		lists:[]
	},
	mutations:{
		change(state,value){
			state.msg=value
		},
		savelist(state,value){
			state.lists=value
		}
	}
})
