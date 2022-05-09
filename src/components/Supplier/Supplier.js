import React from 'react';
import book from '../../images/biography.png'
import './Supplier.css'

const Supplier = (props) => {
    const { name, location } = props.supplier
    return (
        <div className='supplier py-3'>
            <img src={book} alt="book" />
            <h4 className='mt-3'>{name}</h4>
            <p className='mb-0'>{location}</p>
        </div>
    );
};

export default Supplier;