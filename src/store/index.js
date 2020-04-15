import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		id: '12345678',
    role: 'teacher',
	},

	mutations: {
		modify(state, id) {
			state.id = id
		},
    modifyRole(state, role) {
      state.role = role
    }
	},
	actions: {
		modifyFun(context, id) {
			context.commit("modify", id)
		},
    modifyRoleFun(context, role) {
      context.commit("modifyRole", role)
    }
	},
	modules: {}
})
