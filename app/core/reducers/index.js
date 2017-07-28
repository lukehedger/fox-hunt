import { combineReducers } from 'redux-immutablejs'

import * as Hunt from '../../hunt'

export default combineReducers({
  [Hunt.name]: Hunt.reducer,
})
