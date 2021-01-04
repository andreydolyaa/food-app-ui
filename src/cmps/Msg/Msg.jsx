
import './Msg.scss';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

export function Msg({ dishes }) {
    const [dish, setDish] = useState('');


    useEffect(() => {
        if (dishes.length === 1) {
            setDish(dishes[0].name);
        }

        if (dishes.length > 1) {
            var res = dishes[dishes.length - 1];
            setDish(res.name);
        }
    }, [])

    return (
        <div className="msg">
            <p>{dish} Added!</p>
        </div>
    )
}

