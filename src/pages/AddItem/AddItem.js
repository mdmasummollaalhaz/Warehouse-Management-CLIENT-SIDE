import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import './AddItem.css';

const AddItem = () => {
    const [user, loading] = useAuthState(auth);

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = fieldData => {

        // Post new Book to server
        const url = 'https://dry-beach-68491.herokuapp.com/books'
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(fieldData)
        })
            .then(res => res.json())
            .then(result => {

            })

        // Post my Book to server
        axios.post('https://dry-beach-68491.herokuapp.com/my-books', fieldData)
            .then(response => {
                const { data } = response
                if (data.insertedId) {
                    toast('Thanks for add a book!')
                    reset()
                }
            })
    }

    if (loading) {
        return 'loading...'
    }

    return (
        <main>
            <section>
                <div className="container bg-dark my-5 shadow rounded">
                    <div className="row">
                        <div className="col-lg-4">
                            <h2 className='p-5 pb-md-0 text-light'>Add New Book</h2>
                        </div>
                        <div className="col-lg-8">
                            <div className="add-book p-5">

                                <form onSubmit={handleSubmit(onSubmit)} className=' d-flex flex-column'>
                                    <input className=' py-3 px-4 mb-3 rounded border-1 border-dark' type='text' {...register("name")} placeholder='Book Name' />

                                    <input className=' py-3 px-4 mb-3 rounded border-1 border-dark' type='text' {...register("email")} value={user?.email} placeholder='Email' hidden />

                                    <input className=' py-3 px-4 mb-3 rounded border-1 border-dark' type='text' {...register("image")} placeholder='Book image url' />

                                    <textarea className='py-3 px-4 mb-3 rounded border-1 border-dark' type='text'{...register("short_des")} placeholder='Book short description' />

                                    <input className=' py-3 px-4 mb-3 rounded border-1 border-dark' type="number" {...register("price")} placeholder='Book Price' />

                                    <input className=' py-3 px-4 mb-3 rounded border-1 border-dark' type="number" {...register("quantity")} placeholder='Quantity' required />

                                    <input className=' py-3 px-4 mb-3 rounded border-1 border-dark' type="text" {...register("supplier_name")} placeholder='Supplier name' />

                                    <input type="submit" value='Add new Book' className=' bg-info border-0 py-3' />
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
};

export default AddItem;