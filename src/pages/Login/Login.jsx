
import './Login.scss';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { userService } from './../../services/userService';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from './../../store/actions/userActions';
import loading from '../../assets/img/comment.svg';

export function Login(props) {
    const { register, handleSubmit } = useForm();
    const [isSigned, setSigned] = useState(false);
    const [signed, setOk] = useState(false);
    const dispatch = useDispatch();

    const onSubmit = async (data) => {
        var interval;
        await userService.login(data);
        if (sessionStorage.user !== '""') {
            setOk(true);
            interval = setInterval(async () => {
                setOk(false)
                console.log('SESSION STORAGE ', sessionStorage);
                const userByEmail = await userService.getUserByEmail(data.email);
                dispatch(loadUser(userByEmail._id))
                props.history.push('/');
                clearInterval(interval);
            }, 1500)
        }
        else {
            setSigned(true);
            interval = setInterval(() => {
                setSigned(false)
                clearInterval(interval);
            }, 2000)
            return console.log('wrong pw/un');
        }
    }

    return (
        <div className="login">
            <div className="new-user"><h2>Sign In</h2></div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="email">* Email:
        <input name="email" type="text" required ref={register} />
                </label>
                <label htmlFor="password">* Password:
            <input name="password" type="password" required ref={register} />
                </label>
                <button>Login</button>
            </form>
            {isSigned &&
                <h3 className="wrong-pass">Wrong Password or Email</h3>}
            {signed &&
                <div className="gg">
                    <h3 className="good-pass">Successfully Logged In</h3>
                    <img src={loading}></img>
                </div>
            }
        </div>
    )
}


// const onSubmit = async (data) => {
//     userService.login(data);
//     const userByEmail = await userService.getUserByEmail(data.email);
//     if (!userByEmail) {
//         console.log('No such user');
//         return console.log('wrong pw/un');;
//     }
//     dispatch(loadUser(userByEmail._id))
//     props.history.push('/');
// }