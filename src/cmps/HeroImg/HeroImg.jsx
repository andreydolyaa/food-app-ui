
import './HeroImg.scss';
import React from 'react';
import img from '../../assets/img/res.jpg';

export function HeroImg() {
    return (
        <div className="hero-img">
            <h1></h1>
            <h2><span>FooderPlace</span> All the best restaurants in one place.</h2>
            <button className="btn-3"><span>F</span>OOD<span> N</span>OW </button>
            <img src={img}></img>
        </div>
    )
}


