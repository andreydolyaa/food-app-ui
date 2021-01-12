
import axios from 'axios';

// const BASE_URL = 'http://localhost:3001/api/restaurants';

const BASE_URL = process.env.NODE_ENV === 'production'
    ? '/api/restaurants'
    : 'http://localhost:3001/api/restaurants'




export const restaurantService = {
    query,
    getById,
    addNewRestaurant,
    updateRestaurant
}

async function query(filterBy) {
    const res = await axios.get(BASE_URL);
    if (filterBy.searchKey) {
        return res.data.filter(rest => rest.name.toLowerCase().includes(filterBy.searchKey.toLowerCase()));
    }
    return res.data;
}

async function getById(id) {
    const res = await axios.get(`${BASE_URL}/${id}`);
    return res.data;
}

async function addNewRestaurant(restaurant) {
    await axios.post(`${BASE_URL}`, restaurant);
}

async function updateRestaurant(restaurant) {
    await axios.put(`${BASE_URL}/${restaurant._id}`, restaurant);
}


// async function query(filterBy) {
//     if (filterBy.searchKey === null) {
//         const res = await axios.get(BASE_URL);
//         return res.data.filter(rest => rest.name === filterBy.searchKey);
//     }
//     else {
//         const res = await axios.get(BASE_URL);
//         return res.data;
//     }
// }
// async function query(filterBy) {
//     const res = await axios.get(BASE_URL);
//     var result;
//     if (filterBy.searchKey) {
//         result = res.data.filter(rest => rest.name === filterBy);
//     }
//     else {
//         result = res.data;
//     }
//     return result;
// }
// if (filterBy) {
//     return res.data.filter(rest => rest.name === filterBy.name);
// }
// else {
//     return res.data;
// }
