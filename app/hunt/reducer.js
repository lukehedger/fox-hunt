import Immutable, { Map } from 'immutable'
import { createReducer } from 'redux-immutablejs'

import * as actions from './actionTypes'
import { Clue } from './models'

export const initialState = Immutable.fromJS({
  clues: [
    Clue({
      clue: 'This is clue number 1',
      answer: '1',
      input: '',
    }),
    Clue({
      clue: 'This is clue number 2',
      answer: '2',
      input: '',
    }),
    Clue({
      clue: 'This is clue number 3',
      answer: '3',
      input: '',
    }),
    Clue({
      clue: 'This is clue number 4',
      answer: '4',
      input: '',
    }),
    Clue({
      clue: 'This is clue number 5',
      answer: '5',
      input: '',
    }),
    Clue({
      clue: 'This is clue number 6',
      answer: '6',
      input: '',
    }),
    Clue({
      clue: 'This is clue number 7',
      answer: '7',
      input: '',
    }),
    Clue({
      clue: 'This is clue number 8',
      answer: '8',
      input: '',
    }),
    Clue({
      clue: 'This is clue number 9',
      answer: '9',
      input: '',
    }),
    Clue({
      clue: 'This is clue number 10',
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
