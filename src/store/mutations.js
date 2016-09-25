import * as MutationTypes from 'store/mutationTypes'

export const state = {
  remainingTime: 60,
  active: false,
  intervalToken: null
}

export const mutations = {
  [MutationTypes.TICK] (state) {
    state.remainingTime--
  },

  [MutationTypes.START] (state, intervalToken) {
    state.active = true
    state.intervalToken = intervalToken
  },

  [MutationTypes.STOP] (state) {
    clearInterval(state.intervalToken)

    state.intervalToken = null
    state.active = false
  },

  [MutationTypes.RESET] (state) {
    state.remainingTime = 60
  }
}
