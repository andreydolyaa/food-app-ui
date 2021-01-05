
import './AppHeader.scss';
import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { Cart } from '../Cart/Cart';
import { useDispatch, useSelector } from 'react-redux';
import { userService } from '../../services/userService';
import { loadUser, setLoggedIn, logoutUser } from './../../store/actions/userActions';



export function AppHeader(props) {
    var [showCart, setShowCart] = useState(false);

    const cartItems = useSelector(state => state.cartReducer.cartItems);
    const user = useSelector(state => state.userReducer.user);

    const dispatch = useDispatch();

    useEffect(() => {

    }, [])

    const cartToggle = () => {
        setShowCart(showCart = !showCart);
    }

    const close = () => {
        setShowCart(false);
    }

    const logout = () => {
        userService.logout();
        dispatch(logoutUser());
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
            {!user &&
                <div className="user-icons">
                    <div className="cart-num">{cartItems}</div>
                    <i onClick={cartToggle} className="fas fa-shopping-bag"></i>
                    <i className="fas fa-search"></i>
                    <Link className="sign" to="/login">Sign In</Link>
                    <p>|</p>
                    <Link className="sign" to="/signup">Register</Link>
                </div>
            }
            {user && user &&
                <div className="logged-user">
                <div className="ics">
                <div className="cart-num">{cartItems}</div>
                        <i onClick={cartToggle} className="fas fa-shopping-bag"></i>
                        </div>
                        <p className="user-profile">Hi, {user.username}<i className="fas fa-user-circle"></i></p>
                    <p onClick={logout} className="logout">Logout <i className="fas fa-sign-out-alt"></i></p>
                </div>
            }
            {showCart && <Cart close={close} />}

        </div>
    )
}


