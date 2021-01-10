


import './Signup.scss';
import React from 'react';
import { useForm } from 'react-hook-form';
import { userService } from './../../services/userService';
import { loadUser } from '../../store/actions/userActions';
import { useDispatch } from 'react-redux';




export function Signup(props) {
    const { register, handleSubmit } = useForm();

    const dispatch = useDispatch();

    const onSubmit = async (data) => {
        console.log(data);
        await userService.signup(data);
        props.history.push('/login');
    }

    return (
        <div className="signup">
            <div className="new-user"><h2>Register new user</h2></div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="fullName">* Fullname:
            <input name="fullName" type="text" required ref={register} />
                </label>
                <label htmlFor="password">* Password:
            <input name="password" type="password" required ref={register} />
                </label>
                <label htmlFor="email">* Email:
            <input name="email" type="text" required ref={register} />
                </label>
                <label htmlFor="isOwner" className="owner">Register As Restaurant Owner?
            <input name="isOwner" type="checkbox" ref={register} />
                </label>
                <button>Register</button>
            </form>
        </div>
    )
}


