import { combineReducers, createStore } from 'redux';
import bookReducer from './book';

const reducer = combineReducers({
  bookReducer,
});

export default createStore(reducer);
