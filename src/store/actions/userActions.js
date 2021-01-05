import { userService } from "../../services/userService"


export function loadUser(userId) {
    return async dispatch => {
        console.log('ACTION USRR ID ,', userId);
        const user = await userService.getById(userId);
        console.log('ACTION USER GETBYID', user.data);
        dispatch({ type: 'SET_USER', user: user.data });
    }
}

export function setLoggedIn(val) {
    return dispatch => {
        dispatch({ type: 'SET_LOGIN', val })
    }
}

export function logoutUser() {
    return dispatch => {
        dispatch({ type: 'LOGOUT' });
    }
}

