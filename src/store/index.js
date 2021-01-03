import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { restaurantReducer } from './reducers/restaurantReducer';
import { cartReducer } from './reducers/cartReducer';



const rootReducer = combineReducers({
    restaurantReducer,
    cartReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))