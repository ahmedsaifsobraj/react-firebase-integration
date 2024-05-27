import React from 'react';
import './Login.css';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import app from '../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';

const auth = getAuth(app);
const Login = () => {
   const [signInWithGoogle,user]=useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();

    let from = location?.state?.from?.pathname || '/';
   const handleGoogleSignIn =()=>{
    signInWithGoogle()
    .then(()=>{
        navigate(from, {replace:true});
    },[])
   }
    return (
        <div>
            <h1>Please Login Here .......</h1>
            <div style={{margin:'20px'}}>
                <button onClick={handleGoogleSignIn} >Sign In With Google</button>
            </div>
            <form>
                <input type="email" placeholder='Type your email' /><br /><br />
                <input type="password" placeholder='Type your password' /><br /><br />
                <input className='sub-btn' type="submit" value="LOGIN" /><br /><br />
            </form>
        </div>
    );
};

export default Login;