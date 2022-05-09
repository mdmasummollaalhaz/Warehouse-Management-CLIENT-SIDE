import React, { useEffect, useState } from 'react';

const useBooks = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch('https://dry-beach-68491.herokuapp.com/books')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    return [books, setBooks]
};

export default useBooks;