import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		id: '12345678'
	},

	mutations: {
		modify(state, id) {
			state.id = id
		}
	},
	actions: {
		modifyFun(context, id) {
			context.commit("modify", id)
		}
	},
	modules: {}
})
