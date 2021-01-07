



import axios from 'axios';
// const BASE_URL = 'http://localhost:3001/submitOrder';

const BASE_URL = process.env.NODE_ENV === 'production'
    ? '/api/'
    : 'http://localhost:3001/submitOrder'


export const orderService = {
    submitOrder
}


async function submitOrder(userDetails, orderDetails, totalPrice) {
    var fullDetails = {
        userDetails,
        orderDetails,
        totalPrice
    }
    return await axios.post(BASE_URL, fullDetails);
}