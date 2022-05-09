import React from 'react';
import auth from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import googleLogo from '../../images/google.png'
import './LoginWith.css'
import { useLocation, useNavigate } from 'react-router-dom';

const LoginWith = () => {
    const location = useLocation()
    const naviagate = useNavigate()
    let from = location.state?.from?.pathname || "/";

    // login with google hook
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    // handle google login
    const handleGoogleLogin = () => {
        signInWithGoogle()
            // redirect login
            .then(() => {
                naviagate(from, { replace: true })
            })

    }
    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div onClick={handleGoogleLogin} className='login-google'>
            <img src={googleLogo} alt="google" className=' me-3' />
            continue with Google
        </div>
    );
};

export default LoginWith;

