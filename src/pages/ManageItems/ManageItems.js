import React from 'react';
import { Link } from 'react-router-dom';
import useBooks from '../../hooks/useBooks';
import './ManageItems.css'

const ManageItems = () => {
    const [books, setBooks] = useBooks()


    // handle delete book
    const handleDeleteBook = (id) => {
        const process = window.confirm('Would you like to DELETE?')
        if (process) {
            const url = `https://dry-beach-68491.herokuapp.com/books/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const restBooks = books.filter(book => book._id !== id)
                    setBooks(restBooks)
                })
        }
    }
    return (
        <main>
            <section>
                <div className="container py-5 px-5 bg-dark my-5">
                    <div className="row">
                        <div className="col-lg-12 text-xl-start mb-md-5 text-md-center text-sm-center mb-sm-5 mb-5">
                            <h2 className='mb-3 text-light'>Manage Books</h2>
                            <Link to='/add-item' className=' bg-info py-2 px-3 text-dark cus-btn'>Add New Book</Link>
                        </div>
                        <div className="col-lg-12 manage-books">
                            {books.map(book => <div key={book._id} className='book mb-3 py-4'>
                                <img src={book.image} alt={book.name} className=' mb-md-3 mb-sm-3' />
                                <h4 className='mb-0 mb-md-3 mb-sm-3'>{book.name}</h4>
                                <p className='mb-0 mb-md-3 mb-sm-3'>Price: ${book.price}</p>
                                <button className=' bg-danger text-light border-0 fw-bolder px-2 py-1' onClick={() => handleDeleteBook(book._id)}>Delete</button>
                            </div>)}
                        </div>

                    </div>


                </div>
            </section>

        </main>
    );
};

export default ManageItems;