



import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './RestDetails.scss';
import { restaurantReducer } from './../../store/reducers/restaurantReducer';
import { loadRestaurant } from '../../store/actions/restaurantActions';
import { RestFeatures } from './../../cmps/RestFeatures/RestFeatures';
import { RestMenu } from '../../cmps/RestMenu/RestMenu';

export function RestDetails(props) {

    const restaurant = useSelector(state => state.restaurantReducer.restaurant);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadRestaurant(props.match.params.id));
    }, [restaurant])

    return (
        <div className="rest-details-main">
            { restaurant &&
                <div className="rest-details">
                    <div className="rest-img">
                        <img src={restaurant.place_img} />
                    </div>
                    <div className="rest-desc">
                        <h1>{restaurant.name}</h1>
                        <h3>{restaurant.description}</h3>
                        <p>Adress: {restaurant.location}</p>
                        <p>Phone: {restaurant.phone}</p>
                        <p>Opening Hours -</p>
                        {
                            restaurant.opening_hours.map(day => {
                                return (
                                    <p key={Object.keys(day)}>{Object.keys(day)}: {Object.values(day)}</p>
                                )
                            })
                        }
                    </div>
                </div>
            }

            <RestFeatures restaurant={restaurant} />
            {restaurant &&
                <RestMenu restaurant={restaurant} />
            }
            
        </div>
    )
}


