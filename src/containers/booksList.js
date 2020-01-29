import React from 'react';
import { connect } from 'react-redux';
import uniqid from 'uniqid';
import PropTypes from 'prop-types';
import Book from '../components/book';

const BooksList = ({ books }) => (
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
        <Book id={book.id} title={book.title} category={book.category} key={uniqid()} />
      ))}
    </tbody>
  </table>
);

const mapStateToProps = state => ({
  books: state.bookReducer.books,
});

BooksList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  books: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(BooksList);
