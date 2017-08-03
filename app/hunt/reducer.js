import Immutable, { Map } from 'immutable'
import { createReducer } from 'redux-immutablejs'

import * as actions from './actionTypes'

export const initialState = Immutable.fromJS({
  clues: [
    {
      clue: 'Just for starters, no need to go there - name this part of Leicester: 🐸 🇮🇪',
      answer: 'Frog Island',
      input: '',
    },
    {
      clue: 'The statue of Thomas Cook, inventor of the package holiday, can be found outside Leicester Rail Station but what does he have around his neck?',
      answer: 'Bowtie',
      input: '',
    },
    {
      clue: 'You can find The Rutland Dinosaur at the New Walk museum. The question is, what sort of dinosaur is he? (Don\'t forget to get your picture with him!)',
      answer: 'Cetiosaurus',
      input: '',
    },
    {
      clue: 'What sport can you play outside the magazine made of stone?',
      answer: 'Ping pong',
      input: '',
    },
    {
      clue: 'Take Jesus\' mum\'s name, the 4th letter of the alphabet and the surname of Cuba\'s former leader Fidel and you\'ve got the name of a Leicester church. The real question is, which animal is hiding in the bottom left corner of the stained glass window at the back of this church?',
      answer: 'Lamb',
      input: '',
    },
    {
      clue: 'What is the profession of the lady sat outside the City Rooms on Hotel Street?',
      answer: 'Seamstress',
      input: '',
    },
    {
      clue: 'Take yourselves to 24 Granby St. Which flightless bird is having a night on the tiles?',
      answer: 'Turkey',
      input: '',
    },
    {
      clue: 'Head for Holland Park Amusements to see how much the jackpot is worth. (While you\'re there, pop inside and see if you can win a few bob!)',
      answer: '500',
      input: '',
    },
    {
      clue: 'Richard III is buried here but how many statues stand above the entrance to this building?',
      answer: '9',
      input: '',
    },
    {
      clue: 'Your final clue! This worldly establishment will serve up a liquid reward but if you get there 2nd your medal will be made of the same metal as the street.',
      answer: 'The Globe',
      input: '',
    },
  ]
})

export default createReducer(initialState, {
  [actions.SET_INPUT]: (state, action) => state.mergeIn(
    [ 'clues', action.payload.clue ], { input: action.payload.input }
  ),
})
