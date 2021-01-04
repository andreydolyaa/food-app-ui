

const INITIAL_STATE = {
    cart: [],
    cartItems: 0
}

export function cartReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_CART':
            return {
                ...state,
                cart: action.products,
            }
        case 'SET_ITEMS_NUM':
            return {
                ...state,
                cartItems: action.num
            }
        default:
            return state;
    }
}