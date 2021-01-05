
import './UserDetails.scss';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userReducer } from './../../store/reducers/userReducer';
import { loadUser } from './../../store/actions/userActions';

export function UserDetails(props) {

    const user = useSelector(state => state.userReducer.user);
    const dispatch = useDispatch();


    useEffect(() => {
        if (user) dispatch(loadUser(user._id));
    }, [])


    return (
        <div className="user-details">
            <h1>Hello, {user.username}</h1>
            <h3>Your Purchase History</h3>
            {
                user.orders.map((puarchase, idx) => {
                    return (
                        <div className="order-list" key={idx}>
                            <h4>Purchase Date: {puarchase[puarchase.length - 1]}</h4>
                            {puarchase.map((order, idx) => {
                                return (
                                    <div className="order-history" key={idx}>
                                        <p>{order.name}</p>
                                        <p>${order.price}</p>
                                    </div>
                                )
                            })}
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

