import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import rootreducer from './Reducers'


const logger = createLogger()

const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore)

const store = createStoreWithMiddleware(rootreducer)

export default store