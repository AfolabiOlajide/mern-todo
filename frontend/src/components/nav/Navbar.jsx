import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaUserAlt } from 'react-icons/fa';
import toast from 'react-hot-toast';

import classes from "./Navbar.module.scss";

const Navbar = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const getUser = async () => {
        try {
            const {data} = await axios.get('api/users/me')
            setUser(data);
        } catch (error) {
            console.log(error)
        }
    }

    const logout = async () => {
        try {
            await axios.get('/api/auth/logout');
            setUser(null);
            navigate('/auth');
            toast.success('Logout Successful')
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getUser();
    }, []);

    return (
        <header>
            <div className={classes.userInfo}>
                <FaUserAlt className={classes.userIcon} />
                <div>
                    <h1 className={classes.name}>{user?.name}</h1>
                    <h1 className={classes.email}>{user?.email}</h1>
                    <Link to='/edit-profile' className={classes.editBtn}>Edit</Link>
                </div>
            </div>
            <nav>
                <button className={classes.logout} type='button' onClick={logout}>Logout</button>
            </nav>
        </header>
    )
}

export default Navbar