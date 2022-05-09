import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import LoginWith from '../../components/LoginWith/LoginWith';
import auth from '../../firebase.init';

const Signup = () => {
    const [email, setEmail] = useState([])
    const [password, setPassword] = useState([])
    const location = useLocation()
    const naviagate = useNavigate()
    let from = location.state?.from?.pathname || "/";

    // create user hook
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    // Get user email
    const getUserEmail = event => {
        const email = event.target.value
        setEmail(email)
    }

    // Get user password
    const getUserPassword = event => {
        const password = event.target.value
        setPassword(password)
    }

    // handle create user
    const handleCreateUser = event => {
        event.preventDefault()
        createUserWithEmailAndPassword(email, password)
            // redirect after sign up 
            .then(() => {
                naviagate(from, { replace: true })
            })
    }
    return (
        <main>
            <section>
                <div className="container py-5">
                    <h1>Sign up</h1>
                    <div className="form-area w-50 m-auto mt-5">
                        <form onSubmit={handleCreateUser} className=' d-flex flex-column align-content-center justify-content-center align-items-center'>
                            <input onBlur={getUserEmail} type="email" name='email' placeholder='Your Email' className=' mb-3 px-3 py-2 rounded-pill border-1 border-dark w-100' required />

                            <input onBlur={getUserPassword} className=' mb-3 px-3 py-2 rounded-pill border-1 border-dark w-100' type="password" name='password' placeholder='Your Password' required />

                            <input className=' mb-3 bg-info border-0 py-3 px-5 rounded-pill' type="submit" value='Sign up' />
                        </form>

                        <span>Already have account? <Link to='/login'>Login</Link></span>
                        <div className="login-with mt-5">
                            <p>Or Sign up with</p>
                            <LoginWith />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Signup;