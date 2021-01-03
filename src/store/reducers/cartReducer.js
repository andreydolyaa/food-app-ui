

const INITIAL_STATE = {
    cart: [],
    cartItems:0
}

export function cartReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_CART':
            return {
                ...state,
                cart: action.products,
                cartItems:state.cart.length
            }
        default:
            return state;
    }
}