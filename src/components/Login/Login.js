import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from './../Hook/useAuth';


const Login = () => {

    const { signInwithGoogle } = useAuth();
    return (
        <div>
            <h2>Please Login</h2>
            <button onClick={signInwithGoogle}>Google Sign in</button> <br />
            <Link to="/register">New user?</Link>



        </div>
    );
};

export default Login;