import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useBooks from '../../hooks/useBooks';
import './MyItems.css'

const MyItems = () => {
    const [user] = useAuthState(auth)
    const [myBooks, setMyBooks] = useState([])
    const [books, setBooks] = useBooks()
    const navigate = useNavigate()
    useEffect(() => {
        const getMyBooks = async () => {
            const email = user?.email
            const url = `https://dry-beach-68491.herokuapp.com/my-books?email=${email}`
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                setMyBooks(data)
            }
            catch (error) {
                console.log(error.message)
                if (error.response.status === 403 || error.response.status === 401) {
                    signOut(auth)
                    navigate('/login')
                }
            }
        }
        getMyBooks()
    }, [user])

    // handle delete book
    const handleDeleteBook = (id) => {
        const process = window.confirm('Would you like to DELETE?')
        if (process) {
            const url = `https://dry-beach-68491.herokuapp.com/my-books/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const restBooks = myBooks.filter(book => book._id !== id)
                    setMyBooks(restBooks)
                })
        }
    }


    return (
        <main>
            <section>
                <div className="container py-5">
                    <h2>Welcome Back {user?.displayName}</h2>
                    <p>Your Book list</p>
                    <div className="bg-dark my-book-list p-5 mt-5 res-grid">
                        {
                            myBooks.map(book => <div key={book._id} className=''>
                                <img src={book.image} alt={book.name} />
                                <h3 className='mt-3'>{book.name}</h3>
                                <p>{book.short_des.slice(0, 120)}</p>
                                <p>Price: ${book.price}</p>
                                <button onClick={() => handleDeleteBook(book._id)} className="bg-danger border-0 text-light">Delete</button>
                            </div>)
                        }
                    </div>
                </div>
            </section>

        </main>
    );
};

export default MyItems;