import { createSelector } from 'reselect'
import { name } from './constants'

// ------
// STATIC
// ------
const getAll = state => state.get(name)
const getClues = createSelector( getAll, state => state.get('clues').toJS() )

// ------
// COMPUTED
// ------

const getCluesChecked = createSelector( [ getClues ], (clues) => {
  return clues.reduce( (arr, clue, i) => {
    return [
      ...arr,
      {
        ...clue,
        correct: clue.answer === clue.input,
      },
    ]
  }, [])
})

// ------
// EXPORTS
// ------

export default {
  clues: getCluesChecked,
}
