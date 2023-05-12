import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { addBook } from './api';
import './App.css';

function AddBook() {
  const history = useHistory();

  const handleSubmit = async (values) => {
    const newBook = await addBook(values);
    if (newBook) {
      history.push('/');
    }
  };

  return (
    <div>
      <h2>Add Book</h2>
      <Formik
        initialValues={{ title: '', author: '', published:'' }}
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
              
              export default AddBook;
              
