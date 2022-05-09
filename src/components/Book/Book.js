import React from 'react';
import { Link } from 'react-router-dom';
import './Book.css'

const Book = (props) => {
    const { _id, name, image, price, quantity, short_des, supplier_name } = props.book
    return (
        <div className='book'>
            <img src={image} alt={name} className=' w-100' />
            <div className='bookDetails'>
            <h3 className='mt-4'>{name}</h3>
            <p>{`${short_des.slice(0, 120)}...`}</p>
            <div className="d-flex justify-content-around">
                <p><b>Price:</b> ${price}</p>
                <p><b>Quantity: </b>{quantity}</p>
            </div>
            <p className='pb-3'><b>Supplier Name:</b> {supplier_name}</p>
            <Link to={`/books/${_id}`} className='btn py-2 px-4 cus-btn'>Stock Update</Link>
            </div>
        </div>
    );
};

export default Book;