import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebse.init';

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);

    const googleSignUp = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);

    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, user=>{
            console.log(user);
            setUser(user);
        })
        return unsubscribe;
    },[])

    const value = {
        googleSignUp,
        user, 
        setUser,
    }
    return (
        <AuthContext value={value}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;