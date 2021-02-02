import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore, applyMiddleware} from 'redux';
import {rootReducer} from './root.reducer';
import logger from 'redux-logger'

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));
