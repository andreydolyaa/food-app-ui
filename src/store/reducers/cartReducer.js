

const INITIAL_STATE = {
    cart: [],
    menuCart: [],
    cartItems: 0,
    idx: 0,
    totalPrice: 0
}

export function cartReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_CART':
            return {
                ...state,
                cart: action.products
            }
        case 'SET_ITEMS_NUM':
            return {
                ...state,
                cartItems: action.num
            }
        case 'SET_TOTAL_PRICE':
            return {
                ...state,
                totalPrice: action.price
            }
        case 'SET_MENU_CART':
            return {
                ...state,
                menuCart: action.products
            }
        default:
            return state;
    }
}