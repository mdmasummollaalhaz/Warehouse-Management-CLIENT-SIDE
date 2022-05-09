import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import './BookDetails.css';

const BookDetails = (props) => {
    const { bookId } = useParams()
    const [book, setBook] = useState([])

    useEffect(() => {
        const url = `https://dry-beach-68491.herokuapp.com/books/${bookId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setBook(data))
    }, [])

    const { _id, name, image, price, quantity, short_des, supplier_name } = book

    // handle Decrease Book quantity
    const handleDecreseQuantity = () => {
        let { quantity } = book

        if (quantity > 0) {
            quantity = quantity - 1
            const updateQty = { quantity }
            const url = `https://dry-beach-68491.herokuapp.com/books/${bookId}`
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updateQty)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    fetch(url)
                        .then(res => res.json())
                        .then(data => {
                            setBook(data)
                        })

                })
        }
    }

    // handle Increase books Qty
    const handleIncreaseBooksQty = event => {
        event.preventDefault()
        let { _id, name, image, price, quantity, short_des, supplier_name } = book

        const newAddedQuantity = event.target.number.value
        if (!newAddedQuantity || newAddedQuantity <= 0) {
            toast('Please Inter valid number')
        } else {
            quantity = parseInt(quantity) + parseInt(newAddedQuantity)
            const updateQty = { quantity }
            const url = `https://dry-beach-68491.herokuapp.com/books/${bookId}`
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updateQty)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    fetch(url)
                        .then(res => res.json())
                        .then(data => {
                            setBook(data)
                            event.target.number.value = ''
                        })

                })
        }
    }


    return (
        <main>
            <section className='manage-books'>
                <div className="container py-5">
                    <h2 className='pb-5'>Book Details</h2>
                    <div className="row">
                        <div className="book-details col-md-6 p-5">
                            <div className="book-details-wrap shadow p-5 rounded-3">
                                <img src={image} alt={name} className=' w-100' />


                            </div>
                        </div>

                        <div className="book-add col-md-6 p-5 d-flex flex-column justify-content-start align-items-start">
                            <small>Book Id: {_id}</small>
                            <h3 className='mt-4'>{name}</h3>
                            <p className='text-start'>{short_des}</p>

                            <div className="book-info text-start">
                                <p><b>Price: $</b>{price}</p>
                                <p><b>Supplire Name:</b> {supplier_name}</p>
                            </div>

                            <p className=' fs-3'>Quantity: {quantity}</p>

                            <div className="d-flex justify-content-around mb-5">
                                {
                                    quantity === 0 ?
                                        <button className='bg-danger text-light border-0 py-3 px-4 me-4' >Sold Out</button>

                                        :

                                        <button className='bg-success text-light border-0 py-3 px-4 me-4' onClick={handleDecreseQuantity}>Delivered</button>
                                }
                                <Link to='/manage-items' className=' bg-dark text-light py-3 px-3 cus-btn'>Manage Inventories</Link>
                            </div>

                            <h2>Restock Books</h2>
                            <form onSubmit={handleIncreaseBooksQty}>
                                <input className=' py-2 px-4' type="number" placeholder='Number of Books' name='number' />
                                <input className=' py-2 px-4 bg-info border-info' type="submit" value='Increase quantity' />
                            </form>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
};

export default BookDetails;