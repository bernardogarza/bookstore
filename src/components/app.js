import React from 'react';
import { Provider } from 'react-redux';
import BooksList from '../containers/booksList';
import store from '../reducers/index';
import BooksForm from './booksForm';

const App = () => (
  <Provider store={store}>
    <BooksList />
    <BooksForm />
  </Provider>
);

export default App;
