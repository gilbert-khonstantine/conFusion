import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { Leaders } from './leaders';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Dishes } from './dishes';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            leaders: Leaders,
            dishes: Dishes,
            promotions: Promotions,
            comments: Comments,
        }),
        applyMiddleware(thunk, logger) // using redux thunk
    )
    return store;
}