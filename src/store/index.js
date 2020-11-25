import Vue from 'vue'
import Vuex from 'vuex'

import state from './state.js'
import getters from './getters.js'
import mutations from './mutations.js'
import actions from './actions.js'

Vue.use(Vuex)


//state 변수 등록
//getters 변수의 값을 가져옴
//mutations 변수 변화 감지
//actions 변수에 값 저장

export default new Vuex.Store({
	state,
	getters,
	mutations,
	actions
})
