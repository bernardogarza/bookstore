import React from 'react';
import BooksList from './booksList';
import { Provider } from 'react-redux';
import store from '../reducers/index'

const App = () => (
    <Provider store={store} >
        <BooksList />
    </Provider>
)

export default App;
