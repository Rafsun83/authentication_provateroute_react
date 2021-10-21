import React, { createContext } from 'react';
import UseFirebase from '../components/Hook/UserFirebase';
export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    // const {children} = props;
    const allContext = UseFirebase();
    return (
        <AuthContext.Provider value={allContext}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;