

import axios from 'axios';
import moment from 'moment';
// const BASE_URL = 'http://localhost:3001/api/auth';


const BASE_URL = process.env.NODE_ENV === 'production'
    ? '/api/auth'
    : 'http://localhost:3001/api/auth'

const BASE_URL_USER = process.env.NODE_ENV === 'production'
    ? '/api/user'
    : 'http://localhost:3001/api/user'

export const userService = {
    signup,
    login,
    query,
    getById,
    logout,
    getUserByEmail,
    updatePurchaseHistory
}



async function query() {
    return await axios.get(BASE_URL_USER);
}

async function getUserByEmail(email) {
    const users = await query();
    const res = users.data.find(user => user.email === email);
    if (sessionStorage.user === "") return null
    else return res;
}


async function updatePurchaseHistory(user, purchase, restaurant, totalPrice) {
    purchase.push(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
    purchase.push(totalPrice);
    _changeKey(restaurant, "name", "restName");
    purchase.push(restaurant)
    user.orders.push(purchase);
    return await axios.put(`${BASE_URL_USER}/${user._id}`, user);
}


function _changeKey(obj, oldName, newName) {
    obj[newName] = obj[oldName];
    delete obj[oldName];
}


async function getById(userId) {
    return await axios.get(`${BASE_URL_USER}/${userId}`);
}


async function login(userDetails) {
    const user = await axios.post(`${BASE_URL}/login`, userDetails);
    return _handleLogin(user.data);
}

async function signup(userDetails) {
    userDetails.orders = [];
    await axios.post(`${BASE_URL}/signup`, userDetails);
    // return _handleLogin(user.data);
}

async function logout() {
    await axios.post(`${BASE_URL}/logout`);
    sessionStorage.clear();
}


function _handleLogin(user) {
    sessionStorage.setItem('user', JSON.stringify(user));
    return user;
}


function _createUser() {
    return {
        fullName: '',
        email: '',
        password: '',
        orders: []
    }
}
