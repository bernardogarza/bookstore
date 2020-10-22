import React from 'react';
import { Provider } from 'react-redux';
import BooksList from '../../containers/booksList';
import store from '../../reducers/index';
import BooksForm from '../BooksForm/BookForm.component';
import './App.styles.scss';

const App = () => (
  <Provider store={store}>
    <div className="container">
      <BooksList />
      <BooksForm />
    </div>
  </Provider>
);

export default App;
