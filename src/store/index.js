import Vue from 'vue'
import Vuex from 'vuex'
import { state, mutations } from './mutations'
import * as actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  state,
  mutations
})
