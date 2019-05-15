import { Store, createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const enhancer = compose(
    applyMiddleware(sagaMiddleware),
    );
    
let initialState = {};

const store = createStore(rootReducer, initialState, enhancer);
sagaMiddleware.run(rootSaga);

export default store;

