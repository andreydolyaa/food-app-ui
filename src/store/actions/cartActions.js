
import { cartService } from './../../services/cartService';



export function loadCart(products) {
    return dispatch => {
        dispatch({ type: 'SET_CART', products });
        console.log(products, "cart action");
    }
}

export function setNumOfItems(num) {
    return dispatch => {
        dispatch({ type: 'SET_ITEMS_NUM', num });
    }
}