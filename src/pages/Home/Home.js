import React, { Children, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Book from '../../components/Book/Book';
import useBooks from '../../hooks/useBooks';
import './Home.css'
import biography from '../../images/biography.png'
import children from '../../images/children.png'
import photography from '../../images/photography.png'
import food from '../../images/food.png'
import health from '../../images/health.png'
import Supplier from '../../components/Supplier/Supplier';


const Home = () => {
    const [suppliers, setSuppliers] = useState([])
    useEffect(() => {
        fetch('bookSupplier.json')
            .then(res => res.json())
            .then(data => setSuppliers(data))
    }, [])
    const [books] = useBooks([])
    return (
        <main>
            <section className='hero-section d-flex justify-content-center align-items-center'>
                <div className="container">
                    <h1 className='text-light py-3 bg-dark mb-5 title px-5 res-h'>Best Book collection in your city</h1>
                    <a href='#collection' className='btn py-3 px-4 cus-btn'>Check Our Collection</a>
                </div>
            </section>
            <section className='category-section'>
                <div className="container py-5">
                    <h2 className='mb-5'>Top Categories</h2>
                    <div className="categories res-grid">
                        <div>
                            <img src={biography} alt="" />
                            <h3>Biography</h3>
                            <p>Nice Collection</p>
                        </div>
                        <div>
                            <img src={children} alt="" />
                            <h3>Children</h3>
                            <p>special Collection</p>
                        </div>
                        <div>
                            <img src={photography} alt="" />
                            <h3>Photography</h3>
                            <p>super Collection</p>
                        </div>
                        <div>
                            <img src={food} alt="" />
                            <h3>Food & Drink</h3>
                            <p>special Collection</p>
                        </div>
                        <div>
                            <img src={health} alt="" />
                            <h3>Health</h3>
                            <p>Best Collection</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id='collection'>
                <div className="container py-5">
                    <h2>Featured Collections</h2>
                    <div className="books my-5 res-grid">
                        {

                            books.slice(0, 6).map(book => <Book key={book._id} book={book} />)
                        }

                    </div>
                    <Link to='/manage-items' className=' bg-dark btn text-light py-3 px-3 cus-btn'>Manage Inventories</Link>
                </div>

            </section>
            <section>
                <div className="container py-5">
                    <h2>Popular Book supliar</h2>
                    <div className="supliars mt-5 res-grid">
                        {
                            suppliers.map(supplier => <Supplier supplier={supplier} key={supplier.id} />)
                        }
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;