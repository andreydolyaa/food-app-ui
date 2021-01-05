

import axios from 'axios';
const BASE_URL = 'http://localhost:3001/api/auth';

export const userService = {
    signup,
    login,
    query,
    getById,
    logout,
    getUserByEmail
}


async function query() {
    return await axios.get('http://localhost:3001/api/user');
}

async function getUserByEmail(email){
    const users = await query();
    const res = users.data.find(user => user.email === email);
    return res;
}


async function getById(userId) {
    return await axios.get(`http://localhost:3001/api/user/${userId}`);
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

async function logout(){
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
