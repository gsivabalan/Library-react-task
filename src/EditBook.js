import React, { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { fetchBookById, updateBook } from './api';
import './App.css';

function EditBook() {
  const { id } = useParams();
  const history = useHistory();
  const [initialValues, setInitialValues] = useState({ title: '', author: '' });

  useEffect(() => {
    loadBook();
  }, []);

  const loadBook = async () => {
    const book = await fetchBookById(Number(id));
    if (book) {
      setInitialValues(book);
    }
  };

  const handleSubmit = async (values) => {
    const updatedBook = await updateBook(Number(id), values);
    if (updatedBook) {
      history.push('/');
    }
  };

  return (
    <div>
      <h2>Edit Book</h2>
      <Formik
        initialValues={initialValues}
        validate={(values) => {
          const errors = {};
          if (!values.title) {
            errors.title = 'Required';
          }
          if (!values.author) {
            errors.author = 'Required';
          }
          if (!values.published) {
            errors.published = 'Required';
          }
          return errors;
        }}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label htmlFor="title">Title</label>
            <Field type="text" name="title" />
            <ErrorMessage name="title" component="div" />
          </div>
          <div>
            <label htmlFor="author">Author</label>
            <Field type="text" name="author" />
            <ErrorMessage name="author" component="div" />
          </div>
          <div>
            <label htmlFor="published">Published</label>
            <Field type="text" name="published" />
            <ErrorMessage name="published" component="div" />
          </div>
          <div>
            <button type="submit">Submit</button>
            <Link to="/">Cancel</Link>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default EditBook;
