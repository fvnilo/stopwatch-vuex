import * as MutationTypes from 'store/mutationTypes'

export const start = ({ commit, state }) => {
  var interval = setInterval(() => {
    if (state.remainingTime > 0) {
      commit(MutationTypes.TICK)
    } else {
      commit(MutationTypes.STOP)
    }
  }, 1000)

  commit(MutationTypes.START, interval)
}

export const stop = ({ commit }) => commit(MutationTypes.STOP)

export const reset = ({ commit }) => commit(MutationTypes.RESET)
