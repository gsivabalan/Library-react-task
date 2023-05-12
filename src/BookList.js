import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchBooks, deleteBook } from './api';
import './App.css';

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
    const data = await fetchBooks();
    setBooks(data);
  };

  const handleDelete = async (id) => {
    const deletedBook = await deleteBook(id);
    if (deletedBook) {
      setBooks(books.filter((book) => book.id !== id));
    }
  };

  return (
    <div>
      <h1>Library mangement</h1>
      <h2>Book List</h2>
      <Link to="/add">Add Book</Link>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Published</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.published}</td>
              <td>
                <Link to={`/books/${book.id}`}>View</Link>
                <Link to={`/edit/${book.id}`}>Edit</Link>
                <button onClick={() => handleDelete(book.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BookList;
