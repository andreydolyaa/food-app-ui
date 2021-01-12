

import './HomePage.scss';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loadRestaurants } from './../../store/actions/restaurantActions';
import { RestList } from './../../cmps/RestList/RestList';
import { HeroImg } from './../../cmps/HeroImg/HeroImg';
import { Search } from '../../cmps/Search/Search';


export function HomePage(props) {
    const [filterBy, setFilterBy] = useState(null);

    const dispatch = useDispatch();
    const restaurants = useSelector(state => state.restaurantReducer.restaurants);

    useEffect(() => {
        if (filterBy) {
            dispatch(loadRestaurants(filterBy));
        }
        else {
            dispatch(loadRestaurants(restaurants));
        }
    }, [filterBy])

    const onSetFilter = (filterBy) => {
        setFilterBy(filterBy)
    }

    return (
        <div>
            <HeroImg />
            <Search {...props} onSetFilter={onSetFilter} />
            <RestList restaurants={restaurants} />
        </div>
    )
}


// dispatch(loadRestaurants(restaurants));