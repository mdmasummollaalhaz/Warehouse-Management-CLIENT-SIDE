import { async } from '@firebase/util';
import axios from 'axios';
import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import LoginWith from '../../components/LoginWith/LoginWith';
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {
    const location = useLocation()
    const naviagate = useNavigate()
    let from = location.state?.from?.pathname || "/";

    const [email, setEmail] = useState([])
    const [password, setPassword] = useState([])

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


    // Password reset hooks
    const [sendPasswordResetEmail, sending, resetPasswordError] = useSendPasswordResetEmail(
        auth
    );

    // sign in with email and password hooks
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error
    ] = useSignInWithEmailAndPassword(auth);

    // Handle submit form
    const handleSubmitForm = async event => {
        event.preventDefault()
        await signInWithEmailAndPassword(email, password)
        const { data } = await axios.post('https://dry-beach-68491.herokuapp.com/login', { email })
        localStorage.setItem('accessToken', data.accessToken)


    }
    if (user) {
        // redirect login
        naviagate(from, { replace: true })
    }
    if (loading) {
        return <Spinner animation="grow" variant="info" />
    }

    // handle reset password
    const handleResetPassword = async () => {
        if (email.indexOf('@') === -1) {
            toast('Please put your email')
            return
        } else {
            await sendPasswordResetEmail(email)
            toast('Reset password request send to your email')
        }

    }
    return (
        <main>
            <section>
                <div className="container py-5">
                    <h1>Welcome Back</h1>
                    <div className="form-area w-50 m-auto mt-5">
                        <form onSubmit={handleSubmitForm} className=' d-flex flex-column align-content-center justify-content-center align-items-center'>
                            <input onBlur={getUserEmail} type="email" name='email' placeholder='Your Email' className=' mb-3 px-3 py-2 rounded-pill border-1 border-dark w-100' required />

                            <input onBlur={getUserPassword} className=' mb-3 px-3 py-2 rounded-pill border-1 border-dark w-100' type="password" name='password' placeholder='Your Password' required />

                            <p>{error?.message}</p>

                            <input className=' mb-3 btn border-0 py-3 px-5 rounded-pill' type="submit" value='Login' />
                        </form>
                        <span className='text-decoration-underline reset-password d-block mb-3' onClick={handleResetPassword}>Reset your password</span>

                        <span>Want to create account? <Link to='/signup'>Sign up</Link></span>
                        <div className="login-with mt-5">
                            <p>Or login with</p>
                            <LoginWith />
                        </div>
                    </div>
                </div>
            </section>
            <ToastContainer />
        </main>
    );
};

export default Login;