import Immutable from 'immutable'
import { createStore, applyMiddleware, compose } from 'redux'

import createMiddleware from 'core/middleware'
import rootReducer from 'core/reducers'
import { isDevelopment } from 'core/util'

const STATE_KEY = '@FoxyHunt:store'

// create middleware
const middleware = createMiddleware(isDevelopment)

// create store with middleware - and devTools if dev
const finalCreateStore = compose(
  applyMiddleware(...middleware),
  window.devToolsExtension && isDevelopment ? window.devToolsExtension() : f => f
)(createStore)

// persist stored state
const persistState = JSON.parse(localStorage.getItem(STATE_KEY)) || {}

// expose create store method
export const configureStore = (state = persistState) => {
  const store = finalCreateStore(rootReducer, Immutable.fromJS(state))

  // store state on change
  store.subscribe( () => {
    localStorage.setItem(STATE_KEY, JSON.stringify(store.getState()))
  })

  return store
}
