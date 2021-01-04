

import './RedirectPage.scss';
import React, { useEffect } from 'react';
import loading from '../../assets/img/ba35a8698540a7984ef78f470559aa31.gif';
import { useDispatch } from 'react-redux';
import { loadCart, setNumOfItems } from './../../store/actions/cartActions';

function RedirectPage(props) {
    var interval;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadCart([]));
        dispatch(setNumOfItems(0));
        interval = setInterval(() => {
            props.history.push('/');
        }, 3000)
        return () => {
            clearInterval(interval)
        }
    }, [])
    return (
        <div className="loading">
            <h1>Your order is sent, redirecting...</h1>
            <img src={loading}></img>
            <h2></h2>
        </div>
    )
}

export default RedirectPage
