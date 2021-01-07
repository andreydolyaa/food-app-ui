

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Cart.scss';
import { Link } from 'react-router-dom';


export function Cart(props) {
    const [prods, setProds] = useState([]);
    const [price, setPrice] = useState(0);
    const products = useSelector(state => state.cartReducer.cart);

    useEffect(() => {
        var res = products.reduce((acc, curr) => acc + curr.price, 0);
        setPrice(res);

    }, [])

    const closeCart = () => {
        props.close();
    }


    return products && (
        <div className="cart">
            <div className="close-cart">
                <h3>Your order list -</h3>
                <i onClick={closeCart} className="fas fa-times"></i>
            </div>
            <ul>
                {
                    products.map((product, index) => {
                        return (
                            <li key={index}>
                                <p>{product.name}</p>
                                <p>${product.price}</p>
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


