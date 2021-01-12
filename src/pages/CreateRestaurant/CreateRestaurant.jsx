

import './CreateRestaurant.scss';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { utilService } from './../../services/utilService';
import { restaurantService } from '../../services/restaurantService';
import { userService } from './../../services/userService';

export function CreateRestaurant() {
    const { register, handleSubmit, reset } = useForm();
    const { register: registerDish, handleSubmit: handleSubmitDish } = useForm();
    const { register: registerFeature, handleSubmit: handleSubmitFeatures } = useForm();
    const [dishes, setDishes] = useState([]);
    var [features, setFeatures] = useState({});
    var [currRest, setCurrRest] = useState({});
    const history = useHistory();

    const user = useSelector(state => state.userReducer.user);
    const restaurants = useSelector(state => state.restaurantReducer.restaurants);


    useEffect(() => {
        if (user && user.ownerOf) {
            var userRest = restaurants.find(rest => rest.name === user.ownerOf);
            currRest = userRest;
            setCurrRest(currRest);
        }
        console.log('CURREST',Object.keys(currRest).length);
    }, []);

    const submitForm = async (data) => {
        if (Object.keys(currRest).length === 0) {
            console.log('CURR REST IS EXISTING',currRest);
            var restaurant;
            restaurant = data;
            restaurant.menu = dishes;
            restaurant.place_features = features;
            restaurant.opening_hours = [
                { "sunday": "10AM - 2PM" }, { "monday": "10AM - 12PM" }, { "tuesday": "10AM - 12PM" }, { "wednesday": "10AM - 12PM" }, { "thursday": "10AM - 2PM" }, { "friday": "10AM - 2PM" }, { "saturday": "Closed" }
            ]
            var updateUser = user;
            updateUser.ownerOf = restaurant.name;
            await userService.updateUserDetails(updateUser);
            await restaurantService.addNewRestaurant(restaurant);
            console.log('RESTAURANT IS ADDED!');
            history.push('/creating');
        }
        else {
            await restaurantService.updateRestaurant(currRest);
            console.log('UPDATED INSTEAD');
            history.push('/creating');
        }
    }

    const submitDish = (data, ev) => {
        data._id = utilService.createId(10);
        dishes.push(data);
        setDishes(dishes);
        // ev.target.reset();
    }

    const submitFeatures = (data, ev) => {
        features = data
        setFeatures(features);
    }


    return (
        <div className="main-res">
            {user && user.ownerOf && <h3 className="not">Editing feature is not ready yet.</h3>}
            {user && user.isOwner &&
                <div className="finish-create">
                    <form onSubmit={handleSubmit(submitForm)}><button>Publish Your Restaurant</button></form>
                </div>}
            <div className="restaurant-reg">
                <div>
                    {user && user.isOwner && currRest &&
                        <form>
                            <h4>Restaurant Basic Details - </h4>
                            <label htmlFor="name">Restaurant Name:
                    <input type="text" name="name" required ref={register} value={currRest.name} /></label>
                            <label htmlFor="description">Restaurant Description:
                    <input type="text" name="description" required ref={register} value={currRest.description} /></label>
                            <label htmlFor="phone">Restaurant Phone Number:
                    <input type="text" name="phone" required ref={register} value={currRest.phone} /></label>
                            <label htmlFor="location">Restaurant Adress:
                    <input type="text" name="location" required ref={register} value={currRest.location} /></label>
                            <label htmlFor="place_img">Restaurant Main Image:
                    <input type="text" name="place_img" required ref={register} placeholder="Restaurant Img" /></label>
                        </form>}


                    {user && user.isOwner &&
                        <form className="create-new-dish" onSubmit={handleSubmitDish(submitDish)}>
                            <h4>Add Items To Restaurant Menu - </h4>
                            <label htmlFor="name">Dish name:
                    <input type="text" name="name" required ref={registerDish} /></label>
                            <label htmlFor="description">Dish Description:
                    <input type="text" name="description" required ref={registerDish} /></label>
                            <label htmlFor="amount">Dish Amount(Grams):
                    <input type="number" name="amount" required ref={registerDish} /></label>
                            <label htmlFor="price">Dish Price:
                    <input type="number" name="price" required ref={registerDish} /></label>
                            <label htmlFor="img">Dish Img Link:
                    <input type="text" name="img" required ref={registerDish} /></label>
                            <button>Add Dish To Menu</button>
                        </form>}


                    {user && user.isOwner &&
                        <form className="create-new-features" onSubmit={handleSubmitFeatures(submitFeatures)}>
                            <h4>Select Restaurant Features - </h4>
                            <label htmlFor="accessible">Accessible:
                    <input type="checkbox" name="accessible" ref={registerFeature} /></label>
                            <label htmlFor="smoking">Smoking:
                    <input type="checkbox" name="smoking" ref={registerFeature} /></label>
                            <label htmlFor="outside">Outside:
                    <input type="checkbox" name="outside" ref={registerFeature} /></label>
                            <label htmlFor="airConitioner">Air Conitioner:
                    <input type="checkbox" name="airConitioner" ref={registerFeature} /></label>
                            <label htmlFor="specialEvents">Special Events:
                    <input type="checkbox" name="specialEvents" ref={registerFeature} /></label>
                            <label htmlFor="preOrderSeats">Pre order seats:
                    <input type="checkbox" name="preOrderSeats" ref={registerFeature} /></label>
                            <label htmlFor="takeAway">Takeaway:
                    <input type="checkbox" name="takeAway" ref={registerFeature} /></label>
                            <label htmlFor="deliveries">Deliveries:
                    <input type="checkbox" name="deliveries" ref={registerFeature} /></label>
                            <button>Save Features</button>
                        </form>}
                </div>

                <div className="dish-added">
                    {dishes.map(dish => {
                        return (
                            <div className="dish" key={dish._id}>
                                <img src={dish.img} />
                                <p>ID: {dish._id}</p>
                                <p>Name: {dish.name}</p>
                                <p>Description: {dish.description}</p>
                                <p>Amount: {dish.amount}gr</p>
                                <p>Price: ${dish.price}</p>
                            </div>
                        )
                    })}
                </div>

                {currRest.menu &&
                    <div className="dish-added">
                        {currRest.menu.map(dish => {
                            return currRest && (
                                <div className="dish" key={dish._id}>
                                    <img src={dish.img} />
                                    <p>ID: {dish._id}</p>
                                    <p>Name: {dish.name}</p>
                                    <p>Description: {dish.description}</p>
                                    <p>Amount: {dish.amount}gr</p>
                                    <p>Price: ${dish.price}</p>
                                </div>
                            )
                        })}
                    </div>}


                {!user &&
                    <div className="not-logged">
                        <p>Please <Link to="/signup">Register</Link> as a owner or <Link to="/login">Login</Link> to create a new restaurant</p>
                    </div>
                }
            </div>
        </div>
    )
}


// <label htmlFor="menu">Restaurant Menu Items:
//                     <input type="text" name="menu" required ref={register} /></label>
//                     <label htmlFor="place_features">Restaurant Features:
//                     <input type="text" name="place_features" required ref={register} /></label>
// <label htmlFor="opening_hours">Restaurant Opening Hours:
//                     <input type="text" name="opening_hours" required ref={register} /></label>