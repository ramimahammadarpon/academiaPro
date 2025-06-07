import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebse.init';

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);

    const googleSignUp = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
    }

    const gitHubSignUp = () => {
        const provider = new GithubAuthProvider();
        return signInWithPopup(auth, provider);
    }

    const signOutUser = () => {
        return signOut(auth)
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
        gitHubSignUp,
        signOutUser,
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