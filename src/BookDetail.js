import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchBookById } from './api';
import './App.css';

function BookDetail() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    loadBook();
  }, []);

  const loadBook = async () => {
    const data = await fetchBookById(Number(id));
    setBook(data);
  };

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Book Detail</h2>
      <div>
        <strong>Title:</strong> {book.title}
      </div>
      <div>
        <strong>Author:</strong> {book.author}
      </div>
      <div>
        <strong>Published:</strong> {book.published}
      </div>
      <Link to="/">Go Back</Link>
    </div>
  );
}

export default BookDetail;
