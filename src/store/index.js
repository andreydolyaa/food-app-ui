import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { restaurantReducer } from './reducers/restaurantReducer';
import { cartReducer } from './reducers/cartReducer';
import { userReducer } from './reducers/userReducer';



const rootReducer = combineReducers({
    restaurantReducer,
    cartReducer,
    userReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))