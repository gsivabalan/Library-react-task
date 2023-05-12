//import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BookList from './BookList';
import BookDetail from './BookDetail';
import AddBook from './AddBook';
import EditBook from './EditBook';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={BookList} />
        <Route exact path="/books/:id" component={BookDetail} />
        <Route exact path="/add" component={AddBook} />
        <Route exact path="/edit/:id" component={EditBook} />
      </Switch>
    </Router>
  );
}

export default App;
