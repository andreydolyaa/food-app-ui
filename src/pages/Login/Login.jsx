
import './Login.scss';
import React from 'react';
import { useForm } from 'react-hook-form';
import { userService } from './../../services/userService';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from './../../store/actions/userActions';

export function Login(props) {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();

    const onSubmit = async (data) => {
        userService.login(data);
        const userByEmail = await userService.getUserByEmail(data.email);
        dispatch(loadUser(userByEmail._id))
        props.history.push('/');
    }

    return (
        <div className="login">
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="email">* Email:
        <input name="email" type="text" required ref={register} />
                </label>
                <label htmlFor="password">* Password:
            <input name="password" type="password" required ref={register} />
                </label>
                <button>Login</button>
            </form>
        </div>
    )
}


