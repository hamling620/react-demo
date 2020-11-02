import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import counter from './counter/reducer'
import weather from './weather/reducer'
import todos from './todo/reducer'
import filter from './filter/reducer'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose

const enhancers = composeEnhancers(applyMiddleware(thunk))

const reducers = combineReducers({ counter, weather, todos, filter })
const store = createStore(reducers, enhancers)

export default store
