
import './AppHeader.scss';
import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { Cart } from '../Cart/Cart';
import { useDispatch, useSelector } from 'react-redux';
import { loadCart } from './../../store/actions/cartActions';


export function AppHeader(props) {
    var [showCart, setShowCart] = useState(false);
    // const [numOfItems, setNumOfItems] = useState(0);

    const cartItems = useSelector(state => state.cartReducer.cartItems);
    // const dispatch = useDispatch();

    useEffect(() => {
        // setNumOfItems(cartItems);
        console.log('fsdf',props);
    }, [])

    const cartToggle = () => {
        setShowCart(showCart = !showCart);
    }

    const close = () => {
        setShowCart(false);
    }


    return (
        <div className="app-header">
            <div>
                <h1>fooder<span>Place</span></h1>
            </div>
            <div>
                <NavLink to="">About</NavLink>
                <NavLink to="">Restaurants</NavLink>
                <NavLink to="">Order</NavLink>
                <NavLink to="">Explore</NavLink>
                <NavLink to="">Contact</NavLink>
            </div>
            <div className="user-icons">
                <p>|</p>
                <div className="cart-num">{cartItems}</div>
                <i onClick={cartToggle} className="fas fa-shopping-bag"></i>
                <i className="fas fa-search"></i>
                <p>Sign In</p>
            </div>
            {showCart && <Cart close={close} />}

        </div>
    )
}


