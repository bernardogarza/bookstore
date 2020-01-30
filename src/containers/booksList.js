import React from 'react';
import { connect } from 'react-redux';
import uniqid from 'uniqid';
import PropTypes from 'prop-types';
import Book from '../components/book';
import { REMOVE_BOOK } from '../actions';


const BooksList = ({ books, handleRemoveBook }) => (
  <table>
    <thead>
      <tr>
        <td>ID</td>
        <td>Title</td>
        <td>Category</td>
      </tr>
    </thead>
    <tbody>
      {books.map(book => (
        <Book
          id={book.id}
          title={book.title}
          category={book.category}
          key={uniqid()}
          handleRemoveBook={() => handleRemoveBook(book.id)}
        />
      ))}
    </tbody>
  </table>
);


const mapStateToProps = state => ({
  books: state.bookReducer.books,
});

BooksList.propTypes = {
  books: PropTypes.oneOfType([PropTypes.any]).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  handleRemoveBook: book => dispatch(REMOVE_BOOK(book)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
