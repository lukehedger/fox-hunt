import Immutable, { Map } from 'immutable'
import { createReducer } from 'redux-immutablejs'

import * as actions from './actionTypes'
import { Clue } from './models'

export const initialState = Immutable.fromJS({
  clues: [
    Clue({
      clue: '1',
      answer: '1',
      input: '',
    }),
    Clue({
      clue: '2',
      answer: '2',
      input: '',
    }),
    Clue({
      clue: '3',
      answer: '3',
      input: '',
    }),
    Clue({
      clue: '4',
      answer: '4',
      input: '',
    }),
    Clue({
      clue: '5',
      answer: '5',
      input: '',
    }),
    Clue({
      clue: '6',
      answer: '6',
      input: '',
    }),
    Clue({
      clue: '7',
      answer: '7',
      input: '',
    }),
    Clue({
      clue: '8',
      answer: '8',
      input: '',
    }),
    Clue({
      clue: '9',
      answer: '9',
      input: '',
    }),
    Clue({
      clue: '10',
      answer: '10',
      input: '',
    }),
  ]
})

export default createReducer(initialState, {
  [actions.SET_INPUT]: (state, action) => state.mergeIn(
    [ 'clues', action.payload.clue ], { input: action.payload.input }
  ),
})
