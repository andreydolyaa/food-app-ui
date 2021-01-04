
import axios from 'axios';

const BASE_URL = 'http://localhost:3001/api/restaurants';




export const restaurantService = {
    query,
    getById
}


async function query(){
    const res = await axios.get(BASE_URL);
    return res.data;
}


async function getById(id){
    const res = await axios.get(`${BASE_URL}/${id}`);
    return res.data;
}