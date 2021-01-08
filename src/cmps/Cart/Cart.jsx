

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Cart.scss';
import { Link } from 'react-router-dom';
import { loadCart, setNumOfItems } from '../../store/actions/cartActions';


export function Cart(props) {
    const [prods, setProds] = useState([]);
    const [price, setPrice] = useState(0);
    const [itemDeleted, setItemDeleted] = useState(false);
    const products = useSelector(state => state.cartReducer.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        var res = products.reduce((acc, curr) => acc + curr.price, 0);
        setPrice(res);
    }, [])

    const closeCart = () => {
        props.close();
    }

    const deleteItemFromCart = (dish) => {
        setItemDeleted(true);
        var interval;
        interval = setInterval(() => {
            setItemDeleted(false);
            clearInterval(interval);
        }, 1000)
        const prods = [...products];
        const idx = prods.findIndex(product => product.dishId === dish);
        prods.splice(idx, 1);
        var res = prods.reduce((acc, curr) => acc + curr.price, 0);
        setPrice(res);
        dispatch(setNumOfItems(prods.length));
        dispatch(loadCart(prods));
    }


    return products && (
        <div className="cart">
            <div className="close-cart">
                <h3>Your order list -</h3>
                {itemDeleted &&
                    <p className="item-deleted">Item Deleted!</p>}
                <i onClick={closeCart} className="fas fa-times"></i>
            </div>
            <ul>
                {
                    products.map((product, index) => {
                        return (
                            <li key={index}>
                                <p>{product.name}</p>
                                <div className="price-del">
                                    <p>${product.price}</p>
                                    <p onClick={() => deleteItemFromCart(product.dishId)}><i class="far fa-trash-alt"></i></p>
                                </div>
                            </li>
                        )
                    })
                }
                {products.length > 0 &&
                    <div className="done">
                        <Link onClick={closeCart} className="to-checkout" to={{
                            pathname: '/checkout',
                            totalPrice: price,
                            props
                        }}>Proceed to checkout</Link>
                        <p>Total: ${price}</p>
                    </div>
                }
                {products.length === 0 &&
                    <div className="empty-cart">
                        <h4>Your cart is empty <i className="fas fa-shopping-cart"></i></h4>
                        <Link onClick={closeCart} className="find-res" to="/">Find your favorite restaurant</Link>
                    </div>
                }
            </ul>

        </div>

    )
}


