import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducer';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import {watcher} from './Generators/watcher';

export default (initialState) => {
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = applyMiddleware(sagaMiddleware, logger);
    const store = createStore(
        rootReducer, 
        initialState, 
        middlewares
    );

    sagaMiddleware.run(watcher);
    return store;
}
