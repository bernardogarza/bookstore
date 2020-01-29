import React from 'react';
import BooksList from './booksList';
import { Provider } from 'react-redux';
import store from '../reducers/index'
import BooksForm from '../components/booksForm';

const App = () => (
    <Provider store={store} >
        <BooksList />
        <BooksForm />
    </Provider>
)

export default App;
