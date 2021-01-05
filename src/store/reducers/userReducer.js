


var localLoggedInUser = null;
if (sessionStorage.user) localLoggedInUser = JSON.parse(sessionStorage.user);

const INITIAL_STATE = {
    user: localLoggedInUser,
    isLoggedIn: false
}

export function userReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_LOGIN':
            return {
                ...state,
                isLoggedIn: action.val
            }
        case 'LOGOUT':
            return {
                ...state,
                user: null
            }
        default:
            return state;
    }
}