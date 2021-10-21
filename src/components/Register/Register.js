import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h2>Please register</h2>
            <form>
                <input type="email" placeholder="type your mail" /> <br />
                <input type="password" placeholder="password" /> <br />
                <input type="submit" value="submit" /> <br />

            </form>
            <Link to="/login">Already Registered?</Link>
        </div>
    );
};

export default Register;