

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Cart.scss';
import { cartReducer } from './../../store/reducers/cartReducer';
import { loadCart } from './../../store/actions/cartActions';
import { Link } from 'react-router-dom';


export function Cart(props) {
    const [prods, setProds] = useState([]);
    const [price, setPrice] = useState(0);
    const products = useSelector(state => state.cartReducer.cart);
    const dispatch = useDispatch();




    const calcProductsAmount = () => {

    }


    useEffect(() => {
        var res = products.reduce((acc, curr) => acc + curr.price, 0);
        setPrice(res);
        
    },[])

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
                <div className="done">
                    <Link onClick={closeCart} className="to-checkout" to={{
                        pathname:'/checkout',
                        totalPrice:price
                    }}>Proceed to checkout</Link>
                    <p>Total: ${price}</p>
                </div>
            </ul>

        </div>

    )
}


