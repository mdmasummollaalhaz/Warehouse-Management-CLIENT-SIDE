import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/notfound.png'

const NotFound = () => {
    return (
        <main>
            <section>
                <div className="container py-5">
                    <img src={notFound} alt="notfound" />
                    <h1 className='mt-5'>Ooops! Error 404</h1>
                    <p className='mb-5'>Sorry, But the page you are looking for doesn't exist!</p>
                    <Link to='/' className=' bg-info text-black py-3 px-4'>Go to home page</Link>
                </div>
            </section>
        </main>
    );
};

export default NotFound;