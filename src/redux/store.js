import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers/reducers';

// middlewares
const middlewares = [];
if (process.env.NODE_ENV === 'development') {
    const { logger } = require('redux-logger');
    middlewares.push(logger);
}
middlewares.push(thunkMiddleware);

// store
let store;
const createAppStore = () => {
    if (!store) {
        store = createStore(
            reducers, applyMiddleware(...middlewares)
        );
    }
    return store;
}

export default createAppStore;
