

import './HomePage.scss';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loadRestaurants } from './../../store/actions/restaurantActions';
import { RestList } from './../../cmps/RestList/RestList';
import { HeroImg } from './../../cmps/HeroImg/HeroImg';


export function HomePage() {


    const dispatch = useDispatch();
    const restaurants = useSelector(state => state.restaurantReducer.restaurants);

    useEffect(() => {
        dispatch(loadRestaurants(restaurants));
    }, [])


    return (
        <div>
            <HeroImg />
            <RestList restaurants={restaurants} />
        </div>
    )
}


