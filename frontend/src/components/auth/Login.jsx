import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';

import useAuth from '../../hooks/useAuth';
import classes from './AuthForm.module.scss';

function Login() {
    const { auth } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (auth) {
        navigate('/');
        }
    }, [auth, navigate]);

    const login = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        try {
        await axios.post('/api/auth/login', {
            email,
            password,
        });
        navigate('/');
        toast.success("login successful")
        } catch (err) {
        console.log(err);
        toast.error("error logining")
        }
    };
    return (
        <div className={classes.register}>
        <h1 className={classes.title}>Login</h1>
        <form className={classes.authForm} onSubmit={login}>
            <label htmlFor="email">
            email:
            <input name="email" type="email" placeholder="email" required />
            </label>
            <br />
            <label htmlFor="password">
            password:
            <input
                name="password"
                type="password"
                placeholder="password"
                required
            />
            </label>
            <br />
            <button type="submit">Login</button>
        </form>
        </div>
    );
}

export default Login;