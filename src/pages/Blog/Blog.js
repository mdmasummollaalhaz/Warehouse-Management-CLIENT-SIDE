import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <main>
            <section className='blog'>
                <h2 className='mt-5'>Difference between javascript and nodejs</h2>
                <div className="container bg-dark mt-3 mb-5 p-4">

                    <div className="row">
                        <div className="javascript col-md-6">
                            <div className="item">
                                <p>Javascript is a programming language that is used for writing scripts on the website.</p>
                            </div>
                            <div className="item">
                                <p>Javascript can only be run in the browsers.	</p>
                            </div>
                            <div className="item">
                                <p>It is basically used on the client-side.	</p>
                            </div>
                            <div className="item">
                                <p>	Javascript is capable enough to add HTML and play with the DOM. </p>
                            </div>
                            <div className="item">
                                <p>	Javascript is used in frontend development.	</p>
                            </div>
                        </div>
                        <div className="node-js col-md-6">
                            <div className="item">
                                <p>NodeJS is a Javascript runtime environment.
                                </p>
                            </div>
                            <div className="item">
                                <p>We can run Javascript outside the browser with the help of NodeJS.
                                </p>
                            </div>
                            <div className="item">
                                <p>It is mostly used on the server-side.
                                </p>
                            </div>
                            <div className="item">
                                <p>Nodejs does not have capability to add HTML tags.
                                </p>
                            </div>
                            <div className="item">
                                <p>Nodejs is used in server-side development.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="container">
                    <h2 className='mb-3'>When should you use nodejs and when should you use mongodb</h2>
                    <div className="row bg-dark py-2 mb-4 text-light">
                        <p>Node js একটি Backend javascript runtime environment. এটির মাধ্যমে আমরা সকল প্রকার সার্ভার রিলেটেড কাজ করতে পারি। Node js এর মাধ্যমে আমরা fornt end থেকে ডাটা নিয়ে সার্ভার এর মাধ্যমে ডাটাবেস এ রাখতে পারি। আবার সেই ডাটা বেস থেকে ডাটা কালেক্ট করে fornt end এ শো করাতে পারি। আর এ সব কিছু করতে পারি আমরা সহযে node js এর মাধ্যমে server site এ API বানিয়ে. প্রত্যেকটা ব্রাউজার এর মধ্যে একটি করে জাভাস্ক্রিপ্ট ইঞ্জিন থাকে যার কাজ হচ্ছে জাভাস্ক্রিপ্ট কোড কে মেশিন কোডে রূপান্তর করা।
                            Google Chrome এর আছে V8 Engine আর Mozilla Firefox এর আছে SpiderMonkey এবং প্রত্যেকটি ব্রাউজার এর জন্য রয়েছে আলাদা আলাদা জাভাস্ক্রিপ্ট ইঞ্জিন।

                            সব থেকে ফাস্ট হচ্ছে V8 Engine এবং এটি ওপেন সোর্স।
                        </p>
                        <p>MongoDB is a document database used to build highly available and scalable internet applications. আমরা মূলত আমাদের সকল প্রকার development কাজের জন্য ডাটা গুলা কোথাও জমা রাখতে হয়। এই ডাটা গুলা সুন্দর ভাবে জমা রাখে mongoDb. আমাদের দরকারি ডাটা গুলা এখানে আমরা পোস্ট করটে পারি। সেখানে থেকে নিয়ে আবার শো করটে পারি। সেগুলা আবার ডিলিট ও করটে পারি। তাই আমাদের কোন রিয়েল লাইফ প্রজেক্ট এর এই MongoDb ডাটাবেস এর গুরুত্ব অপরিসিম। কারনে এখানে আমরা আমাদের ডাটা জমা রাখা থেকে শুরু করে সকল প্রকার কাজ করতে পরি.</p>
                    </div>
                </div>
                <div className="question">
                    <h2 className='mt-5'> Differences between sql and nosql databases.</h2>
                    <div className="container bg-dark mt-3 mb-5 p-4">

                        <div className="row">
                            <div className="javascript col-md-6">
                                <div className="item">
                                    <p>SQL databases are vertically scalable</p>
                                </div>
                                <div className="item">
                                    <p>SQL databases are table-based,	</p>
                                </div>
                                <div className="item">
                                    <p>SQL databases are better for multi-row transactions</p>
                                </div>
                                <div className="item">
                                    <p>SQL databases are relational</p>
                                </div>
                                <div className="item">
                                    <p>	SQL databases use structured query language and have a predefined schema.	</p>
                                </div>
                            </div>
                            <div className="node-js col-md-6">
                                <div className="item">
                                    <p>NoSQL databases are horizontally scalable
                                    </p>
                                </div>
                                <div className="item">
                                    <p>NoSQL databases are document, key-value, graph, or wide-column stores.
                                    </p>
                                </div>
                                <div className="item">
                                    <p>NoSQL is better for unstructured data like documents or JSON.
                                    </p>
                                </div>
                                <div className="item">
                                    <p>NoSQL databases are non-relational.
                                    </p>
                                </div>
                                <div className="item">
                                    <p>NoSQL databases have dynamic schemas for unstructured data.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Blog;