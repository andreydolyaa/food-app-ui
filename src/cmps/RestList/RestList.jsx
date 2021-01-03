

import './RestList.scss';
import React from 'react';
import { RestPreview } from './../RestPreview/RestPreview';



export function RestList({ restaurants }) {
    return (
        <ul className="rest-list">
            {restaurants.map(rest => <RestPreview rest={rest} key={rest._id} />)}
        </ul>
    )
}


