import { createStore, applyMiddleware } from 'redux'
import logger from './middleware/logger_middleware.js'
import reducer from './reducers/app_reducer.js'

const store = createStore(reducer, applyMiddleware( logger ));
export default store;
