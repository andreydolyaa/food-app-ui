
import './UserDetails.scss';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userReducer } from './../../store/reducers/userReducer';
import { loadUser } from './../../store/actions/userActions';
import { AppFooter } from '../../cmps/AppFooter/AppFooter';
import { useHistory } from 'react-router-dom';

export function UserDetails(props) {

    const user = useSelector(state => state.userReducer.user);
    const dispatch = useDispatch();
    const history = useHistory();


    useEffect(() => {
        console.log(props);
        if (user) dispatch(loadUser(user._id));
    }, [])

    const editRestaurant = () => {
        history.push('/restaurant-register');
    }

    return (
        <div className="user-details">
            <div className="welcome-msg">
                <h1>Hello, {user.username}!</h1>
                {user.ownerOf && <h1>Your Restaurant - <span>{user.ownerOf} <i onClick={editRestaurant} class="far fa-edit"></i></span></h1>}
            </div>
            {
                user.orders.map((puarchase, idx) => {
                    return (
                        <div className="order-list" key={idx}>
                            <h3>Purchase History</h3>
                            <h4>Purchase Date: {puarchase[puarchase.length - 3]} <span>At: {puarchase[puarchase.length - 1].restName}</span></h4>
                            {puarchase.map((order, idx) => {
                                return order.name && (
                                    <div className="order-history" key={idx}>
                                        <p>{order.name}</p>
                                        <p>${order.price}</p>
                                    </div>
                                )
                            })}
                            <p className="total-history">Total: ${puarchase[puarchase.length - 2]}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}



// return (
//     <div className="user-details">
//         <h1>Hello, {user.username}</h1>
//         <h3>Your Purchases - </h3>
//         {
//             user.orders.map(puarchase => {
//                 return (
//                     puarchase.map(order => {
//                         return (
//                             <div className="order-history">
//                             <p>{order.name}</p>
//                             </div>
//                         )
//                     })
//                 )
//             })
//         }
//     </div>
// )
// }

