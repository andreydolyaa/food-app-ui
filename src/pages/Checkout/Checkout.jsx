

import React, { useEffect, useState } from 'react';
import './Checkout.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { orderService } from './../../services/orderService';
import { Redirect } from 'react-router-dom';
import { userService } from '../../services/userService';
import { userReducer } from './../../store/reducers/userReducer';
import { loadUser } from './../../store/actions/userActions';

export function Checkout(props) {
    const { register, handleSubmit } = useForm();

    const cart = useSelector(state => state.cartReducer.cart);
    const user = useSelector(state => state.userReducer.user);
    const dispatch = useDispatch();


    useEffect(() => {
        if(user) dispatch(loadUser(user._id));
    }, [])
    const onSubmit = async (data) => {
        orderService.submitOrder(data, cart, props.location.totalPrice);
        if (user) {
            await userService.updatePurchaseHistory(user, cart);
        }
        props.history.push('/order-process');
    }

    return (
        <div className="checkout">
            <div className="checkout-ul">
                <h2>Your Order - </h2>
                {
                    cart.map((dish, index) => {
                        return (
                            <div className="checkout-list" key={index}>
                                <img src={dish.img}></img>
                                <p>{dish.name}</p>
                                <p>${dish.price}</p>
                            </div>
                        )
                    })
                }
                <h3>Total price: ${props.location.totalPrice}</h3>
            </div>
            <form className="user-details" onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="firstName">First Name:
                <input name="firstName" type="text" required ref={register} /></label>
                <label htmlFor="lastName">Last Name:
                <input name="lastName" type="text" required ref={register} /></label>
                <label htmlFor="adress">Adress:
                <input name="adress" type="text" required ref={register} /></label>
                <label htmlFor="email">Email:
                <input name="email" type="text" required ref={register} /></label>
                <div className="card">
                    <h3>Payment Details</h3>
                    <label htmlFor="card">Card Number:
                <input name="card" type="number" required placeholder="Card Number" ref={register} /></label>
                    <label htmlFor="date">Exp.Date:
                <input name="date" type="number" required placeholder="MM/YY" ref={register} /></label>
                    <label htmlFor="ccv">CCV:
                <input name="ccv" type="number" required placeholder="CCV" ref={register} /></label>
                </div>
                <button>Submit Order</button>
            </form>
        </div>
    )
}




// const [register, setFormData] = useForm({
//         firstName: '',
//         lastName: '',
//         adress: '',
//         email: '',
//         card: null,
//         date: null,
//         ccv: null
//     })