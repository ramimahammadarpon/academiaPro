import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebse.init';

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleSignUp = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
    }

    const gitHubSignUp = () => {
        const provider = new GithubAuthProvider();
        return signInWithPopup(auth, provider);
    }

    const signUpwithEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginWithEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signOutUser = () => {
        return signOut(auth)
    }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, user=>{
            console.log(user);
            setUser(user);
            setLoading(false);
        })
        return unsubscribe;
    },[])

    const value = {
        googleSignUp,
        gitHubSignUp,
        signUpwithEmail,
        loginWithEmail,
        signOutUser,
        user, 
        setUser,
        loading
    }
    return (
        <AuthContext value={value}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;