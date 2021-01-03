const INITIAL_STATE = {
    restaurants: [],
    restaurant: null
}


export function restaurantReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_RESTAURANTS':
            return {
                ...state,
                restaurants: action.restaurants
            }
        case 'SET_RESTAURANT':
            return {
                ...state,
                restaurant: action.restaurant
            }
        default:
            return state;
    }
}