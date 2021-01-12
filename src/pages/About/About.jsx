

import React from 'react';
import './About.scss';



export function About() {
    return (
        <div className="about">
            <h2>Fooder Place App</h2>
            <ol>
                <li>In this app you can register as an restaurant owner, and publish your restaurant, your restaurants menu and features, and users can make orders from the restaurant.</li>
                <li>Registration is possible as a basic user or as a restaurant owner.</li>
                <li>Users can select a restaurant and select the dishes from that restaurant, add them to the their cart, or delete items from the cart, checkout, and recieve an email with the order details, orders history also available in the users personal area.</li>
                <li>Restaurant owner can create a restaurant with all the restaurant details including location, contact details, images, meals, features and more.</li>
            </ol>
            <h2>Tools Used in the app</h2>
            <ul>
                <li>React for Frontend</li>
                <li>React Hooks & React Router</li>
                <li>Redux for State Management</li>
                <li>Node.js & Express.js</li>
                <li>MongoDB & Atlas for cloud storage</li>
                <li>HTML5, CSS3 ,Sass for Frontend design and structure</li>
            </ul>
        </div>
    )
}


