
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext(null)
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';


const Authproviders = ({children}) => {
    const auth = getAuth(app);
    const [user ,setuser] = useState(null)
    const [loading , setloading] = useState(true)


    useEffect(()=>{
        const Unsubscribe = onAuthStateChanged(auth , currentUser => {
            console.log('user in auth state changes' , currentUser)
            setuser(currentUser)
            setloading(false)
        })

        return () => {
            Unsubscribe()
        }
    },[auth])


    const createUser = (email , password) => {
        setloading(true)
        return createUserWithEmailAndPassword(auth , email , password)
    }

    const loginUser = (email , password) => {
        setloading(true)
        return signInWithEmailAndPassword(auth , email , password)
    }


    const logout = () => {
        setloading(true)
        return signOut(auth)
    }

    const UpdateProfile = (name ) => {
        return  updateProfile(auth.currentUser, {
            displayName: name 
        })

    }

    const authInfo = {
        user,
        createUser,
        loginUser,
        logout,
        UpdateProfile,
        loading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

Authproviders.propTypes = {
    children : PropTypes.node
};

export default Authproviders;