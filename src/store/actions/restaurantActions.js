
import { restaurantService } from './../../services/restaurantService';



export function loadRestaurants(filterBy) {
    return async dispatch => {
        const restaurants = await restaurantService.query(filterBy);
        dispatch({ type: 'SET_RESTAURANTS', restaurants });
    }
}


export function loadRestaurant(id) {
    return async dispatch => {
        const restaurant = await restaurantService.getById(id);
        dispatch({ type: 'SET_RESTAURANT', restaurant });
    }
}