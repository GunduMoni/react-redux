import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducer';
import logger from 'redux-logger';
import {custom_middleware} from './customMiddleware';

export default (initialState) => {

    const middlewares = applyMiddleware(custom_middleware, logger);
    const store = createStore(
        rootReducer, 
        initialState, 
        middlewares
    );
    return store;
}
