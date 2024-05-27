import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { getAuth } from 'firebase/auth';
import app from '../firebase.init';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
const Header = (props) => {
    const auth = getAuth(app);
    const [user] = useAuthState(auth);

    const [signOut] = useSignOut(auth);

    return (
        <div>
            <nav>
                <Link to={'/home'}>Home</Link>
                <Link to={'/products'}>Products</Link>
                <Link to={'/orders'}>Orders</Link>
                <Link to={'/register'}>Register</Link>
                <span> {user?.displayName && user.displayName} </span>
                {
                    user?.uid ? <button onClick={async () => {
                        const success = await signOut();
                        if (success) {
                            alert('You are sign out');
                        }
                    }} >Sign out</button> : <Link to={'/Login'}>Login</Link>
                }

            </nav>
        </div>
    );
};

export default Header;