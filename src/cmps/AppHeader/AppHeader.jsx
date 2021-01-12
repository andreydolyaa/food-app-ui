
import './AppHeader.scss';
import React, { useEffect, useState } from 'react'
import { Link, NavLink, Redirect, useHistory, useLocation } from 'react-router-dom';
import { Cart } from '../Cart/Cart';
import { useDispatch, useSelector } from 'react-redux';
import { userService } from '../../services/userService';
import { loadUser, setLoggedIn, logoutUser } from './../../store/actions/userActions';




export function AppHeader(props) {
    var [showCart, setShowCart] = useState(false);
    var [mobileMenu, setMobileMenu] = useState(false);
    const history = useHistory();


    const cartItems = useSelector(state => state.cartReducer.cartItems);
    const user = useSelector(state => state.userReducer.user);

    const dispatch = useDispatch();

    useEffect(() => {
        console.log(props);
        window.addEventListener('scroll', () => setMobileMenu(false));
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

    const openMobileMenu = () => {
        setMobileMenu(mobileMenu = !mobileMenu);
    }

    const cartToggleR = () => {

    }

    const toMain = () => {
        history.push('/');
    }


    return (
        <div>
            <div className="app-header">
                <div onClick={toMain} className="logo">
                    <h1>fooder<span>Place</span></h1>
                </div>
                <div className="links">
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/">Restaurants</NavLink>

                    <NavLink to="/contact">Contact</NavLink>
                    <NavLink className="reg-res" to="restaurant-register">Publish</NavLink>
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
                        <Link className="user-profile" to="/user-details"><p>Hi, {user.username}<i className="fas fa-user-circle"></i></p></Link>
                        <Link className="logout" to="/"><p onClick={logout}>Logout <i className="fas fa-sign-out-alt"></i></p></Link>
                    </div>
                }
                {showCart && <Cart close={close} />}
                <div className="bars-btn">
                <div className="cart-num">{cartItems}</div>
                    <button className="bag"><i  onClick={cartToggle} className="fas fa-shopping-bag"></i></button>
                    <button onClick={openMobileMenu}><i className="fas fa-bars"></i></button>
                </div>
            </div>




            <div className={mobileMenu ? 'show mobile-nav' : 'hide mobile-nav'}>
                <div className="mobile-links">
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/">Restaurants</NavLink>

                    <NavLink to="/contact">Contact</NavLink>
                    <NavLink to="restaurant-register">Publish</NavLink>
                </div>
                <div className="mobile-login">
                    {!user &&
                        <div className="user-icons">
                            <div className="cart-num">{cartItems}</div>
                            <i onClick={cartToggle} className="fas fa-shopping-bag"></i>
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
                            <Link className="user-profile" to="/user-details"><p>Hi, {user.username}<i className="fas fa-user-circle"></i></p></Link>
                            <Link className="logout" to="/"><p onClick={logout}>Logout <i className="fas fa-sign-out-alt"></i></p></Link>
                        </div>
                    }
                </div>
            </div>



        </div>
    )
}

// style={{display: mobileMenu ? 'block' : 'none'}}
// <div className="mobile-header" style={{ display: mobileMenu ? 'flex' : 'none' }} >
//                     <MobileMenu closeMobileMenu={openMobileMenu} />
//             </div>