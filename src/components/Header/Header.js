import React from 'react';
import { Link } from 'react-router-dom';

import "./Header.css"
import useAuth from './../Hook/useAuth';

const Header = () => {
    const { user, Logout } = useAuth();
    return (
        <div className="header___nav">
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/shipping">Shipping</Link>
            <Link to="/placeorder">PlaceOrder</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
            <span>{user.displayName} </span>
            {user?.email && <button className="logout__btn" onClick={Logout}>Logout</button>}
        </div>
    );
};

export default Header;