
import PropTypes from 'prop-types';
import { createContext, useState } from 'react';
export const AuthContext = createContext(null)
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../Firebase/firebase.config';


const Authproviders = ({children}) => {
    const auth = getAuth(app);
    const [user ,setuser] = useState(null)

    const createUser = (email , password) => {
        return createUserWithEmailAndPassword(auth , email , password)
    }


    const authInfo = {
        user,
        createUser
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