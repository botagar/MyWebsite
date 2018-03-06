import { createStore, applyMiddleware, compose } from 'redux'
import { logger } from 'redux-logger'

import blogApi from '../blog/api.middleware.js'
import rootReducer from './rootReducer.js'

// For more logging options: https://github.com/evgenyrodionov/redux-logger

const configureStore = (preloadedState, reactDevTools) => {
  const middlewares = [blogApi, logger]
  const middlewareEnhancer = applyMiddleware(...middlewares)
  const enhancers = compose(middlewareEnhancer, reactDevTools || (f => f))

  return createStore(rootReducer, preloadedState, enhancers)
}

export default configureStore
