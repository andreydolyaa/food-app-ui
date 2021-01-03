
import './RestFeatures.scss';
import React from 'react'

export function RestFeatures({ restaurant }) {
    if (!restaurant) return <div></div>;
    return (
        <div className="rest-features">
            {restaurant.place_features.accessible ? <p className={restaurant.place_features.accessible ? 'allowed' : 'notAllowed'}><i className="fas fa-wheelchair"></i> Restaurant is accessible</p> : null}
            {restaurant.place_features.smoking === false ? <p className={restaurant.place_features.smoking === false ? 'notAllowed' : 'allowed'}><i className="fas fa-smoking-ban"></i> Smoking is not allowed</p> : null}
            {restaurant.place_features.outside ? <p className={restaurant.place_features.outside ? 'allowed' : 'notAllowed'}><i className="fas fa-tree"></i> Sitting outside</p> : null}
            {restaurant.place_features.airConitioner ? <p className={restaurant.place_features.airConitioner ? 'allowed' : 'notAllowed'}><i className="fas fa-thermometer-three-quarters"></i> Air conditioning</p> : null}
            {restaurant.place_features.specialEvents ? <p className={restaurant.place_features.specialEvents ? 'allowed' : 'notAllowed'}><i className="far fa-calendar-alt"></i> Special Events</p> : null}
            {restaurant.place_features.preOrderSeats ? <p className={restaurant.place_features.preOrderSeats ? 'allowed' : 'notAllowed'}><i className="fas fa-phone"></i> Preorder table/s is possible</p> : null}
            {restaurant.place_features.takeAway ? <p className={restaurant.place_features.takeAway ? 'allowed' : 'notAllowed'}><i className="fas fa-box"></i> Take away</p> : null}
            {restaurant.place_features.deliveries ? <p className={restaurant.place_features.deliveries ? 'allowed' : 'notAllowed'}><i className="fas fa-shipping-fast"></i> Home deliveries</p> : null}
        </div>
    )
}


