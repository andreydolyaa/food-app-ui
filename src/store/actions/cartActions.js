
import { cartService } from './../../services/cartService';



export function loadCart(products) {
    return dispatch => {
        dispatch({ type: 'SET_CART', products });
    }
}

export function setNumOfItems(num) {
    return dispatch => {
        dispatch({ type: 'SET_ITEMS_NUM', num });
    }
}


export function setTotalPrice(price) {
    return dispatch => {
        dispatch({ type: 'SET_TOTAL_PRICE', price });
    }
}

export function setMenuCart(products) {
    return dispatch => {
        dispatch({ type: 'SET_MENU_CART', products });
    }
}
