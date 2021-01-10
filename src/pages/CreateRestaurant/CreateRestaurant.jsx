

import './CreateRestaurant.scss';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { utilService } from './../../services/utilService';

export function CreateRestaurant() {
    const { register, handleSubmit } = useForm();
    const { register: registerDish, handleSubmit: handleSubmitDish } = useForm();
    const [dishes, setDishes] = useState([]);

    const user = useSelector(state => state.userReducer.user);


    useEffect(() => {

    }, [dishes]);

    const submitForm = (data) => {
        // console.log(data);
    }

    const submitDish = (data) => {
        data._id = utilService.createId(10);
        dishes.push(data);
        setDishes(dishes);
        console.log(dishes);
    }


    return (
        <div className="restaurant-reg">

            <div>
                {user && user.isOwner &&
                    <form onSubmit={handleSubmit(submitForm)}>
                    <h4>Restaurant Basic Details - </h4>
                        <label htmlFor="name">Restaurant Name:
                    <input type="text" name="name" required ref={register} /></label>
                        <label htmlFor="description">Restaurant Description:
                    <input type="text" name="description" required ref={register} /></label>
                        <label htmlFor="phone">Restaurant Phone Number:
                    <input type="text" name="phone" required ref={register} /></label>
                        <label htmlFor="location">Restaurant Adress:
                    <input type="text" name="location" required ref={register} /></label>
                        <label htmlFor="place_img">Restaurant Main Image:
                    <input type="text" name="place_img" required ref={register} /></label>
                    </form>}


                <form className="create-new-dish" onSubmit={handleSubmitDish(submitDish)}>
                <h4>Add Items To Restaurant Menu - </h4>
                    <label htmlFor="dishName">Dish name:
                    <input type="text" name="dishName" required ref={registerDish} /></label>
                    <label htmlFor="dishDescription">Dish Description:
                    <input type="text" name="dishDescription" required ref={registerDish} /></label>
                    <label htmlFor="amount">Dish Amount(Grams):
                    <input type="number" name="amount" required ref={registerDish} /></label>
                    <label htmlFor="price">Dish Price:
                    <input type="number" name="price" required ref={registerDish} /></label>
                    <label htmlFor="img">Dish Img Link:
                    <input type="text" name="img" required ref={registerDish} /></label>
                    <button>Add Dish To Menu</button>
                </form>
            </div>


            <div className="dish-added">
                {dishes.map(dish => {
                    return (
                        <div className="dish" key={dish._id}>
                            <img src={dish.img} />
                            <p>ID: {dish._id}</p>
                            <p>Name: {dish.dishName}</p>
                            <p>Description: {dish.dishDescription}</p>
                            <p>Amount: {dish.amount}gr</p>
                            <p>Price: ${dish.price}</p>
                        </div>
                    )
                })}
            </div>

            {!user.isOwner &&
                <div>
                    <p>Please or <Link to="/signup">Register</Link> as a owner or <Link to="/login">Login</Link> to create a new restaurant</p>
                </div>
            }
        </div>
    )
}


// <label htmlFor="menu">Restaurant Menu Items:
//                     <input type="text" name="menu" required ref={register} /></label>
//                     <label htmlFor="place_features">Restaurant Features:
//                     <input type="text" name="place_features" required ref={register} /></label>
// <label htmlFor="opening_hours">Restaurant Opening Hours:
//                     <input type="text" name="opening_hours" required ref={register} /></label>