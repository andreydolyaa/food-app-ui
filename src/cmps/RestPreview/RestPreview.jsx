
import './RestPreview.scss';
import React from 'react';
import { Link } from 'react-router-dom';


export function RestPreview({ rest }) {
    return (
        <div className="rest-preview">
            <li>
                <h2>{rest.name}</h2>
                <img src={rest.place_img}></img>
                <div className="order-btn">
                    <p>{rest.description}</p>
                    <Link to={`/restaurant/${rest._id}`}>
                        <button>Visit</button>
                    </Link>
                </div>
            </li>
        </div>
    )
}


