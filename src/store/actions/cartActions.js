
import { cartService } from './../../services/cartService';



export function loadCart(products) {
    return dispatch => {
        dispatch({ type: 'SET_CART', products });
    }
}

