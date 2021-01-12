
import './LoadingCreate.scss';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import loading from '../../assets/img/ba35a8698540a7984ef78f470559aa31.gif';


export function LoadingCreate() {
    var [restaurant, setRestaurant] = useState(false);
    var [menu, setMenu] = useState(false);
    var [publish, setPublish] = useState(false);
    var [done, setDone] = useState(false);
    const history = useHistory();
    var interval;
    useEffect(() => {
        setRestaurant(true)
        interval = setInterval(() => {
            setRestaurant(false);
            clearInterval(interval);
            if (!restaurant) {
                setMenu(true);
                interval = setInterval(() => {
                    setMenu(false);
                    clearInterval(interval);
                    if (!menu) {
                        setPublish(true)
                        interval = setInterval(() => {
                            setPublish(false)
                            clearInterval(interval);
                            if (!publish) {
                                setDone(true);
                                clearInterval(interval);
                                interval = setInterval(() => {
                                    clearInterval(interval);
                                    history.push('/');
                                }, 1000)
                            }
                        }, 2000);
                    }
                }, 2000)
            }
        }, 2000)
    }, []);
    return (
        <div className="creating">
            {restaurant && <h1>Creating The Restaurant...</h1>}
            {menu && <h1>Creating The Menu...</h1>}
            {publish && <h1>Publishing Your Restaurant...</h1>}
            {done && <h1 className="d">Done!</h1>}
            <img src={loading}></img>
        </div>
    )
}


