
import './RestMenu.scss';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loadCart, setNumOfItems } from '../../store/actions/cartActions';
import { Msg } from '../Msg/Msg';
import { utilService } from './../../services/utilService';
import { setTotalPrice } from './../../store/actions/cartActions';



export function RestMenu({ restaurant }) {
    const [dishes, setDishes] = useState([]);
    var [showMsg, setMsg] = useState(false);
    var [totalProdsPrice, setTotalProdsPrice] = useState(0);
    const dispatch = useDispatch();
    var interval;


    const cart = useSelector(state => state.cartReducer.cart);


    useEffect(() => {
        setDishes(cart);
    }, [cart])

    const addDish = (dish) => {
        dishes.push(dish);
        setDishes(dishes)
    }
    const removeDish = (dish) => {
        const idx = dishes.findIndex(currDish => currDish.name === dish.name);
        if (idx !== -1) dishes.splice(idx, 1);
        setDishes(dishes);
    }

    const numOfDishes = (dish) => {
        var counter = 0;
        dishes.forEach(currDish => currDish.name === dish.name ? counter++ : null);
        return counter;
    }

    const addToCart = (dishe) => {
        dishes.forEach(dish => dish.dishId = utilService.createId(10));
        var totalPrice = dishes.reduce((acc, val) => acc += val.price, 0);
        dispatch(loadCart(dishes));
        dispatch(setNumOfItems(dishes.length));
        dispatch(setTotalPrice(totalPrice));
        toggleMsg();
    }

    const toggleMsg = () => {
        setMsg(true);
        interval = setInterval(() => {
            setMsg(false);
            clearInterval(interval);
        }, 2000);
    }


    if (!restaurant) return <div></div>;
    return (
        <ul className="rest-menu">
            {
                restaurant.menu.map((dish, index) => {
                    return (
                        <li key={index}>
                            <div>
                                <h4>{dish.name}</h4>
                                <img src={dish.img}></img>
                                <p>{dish.description}</p>
                            </div>
                            <div className="dish-info">
                                <p>Dish size - {dish.amount}</p>
                                <p>${dish.price} / Serve</p>
                                <div className="dish-num">
                                    <button className="add-btn" onClick={() => addDish(dish)}>
                                        <i className="far fa-plus-square"></i>
                                    </button>
                                    <p>{numOfDishes(dish)}</p>
                                    <button className="add-btn" onClick={() => removeDish(dish)}>
                                        <i className="far fa-minus-square"></i>
                                    </button>
                                </div>
                                <button onClick={() => addToCart(dish)}>add</button>
                            </div>
                        </li>
                    )
                })
            }
            {showMsg && <Msg dishes={dishes} />}
        </ul>
    )
}
