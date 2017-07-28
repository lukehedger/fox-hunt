import * as actions from './actionTypes'

export const setInput = (clue, input) => ({
  type: actions.SET_INPUT,
  payload: {
    clue,
    input,
  },
})
