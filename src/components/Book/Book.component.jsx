import React from 'react';
import PropTypes from 'prop-types';

import './Book.styles.scss';

const Book = ({ id, title, category, handleRemoveBook }) => {
  return (
    <tr className="row" data-test="book-component">
      <td className="left-column">
        <span className="category" data-test="category">
          {category}
        </span>
        <br />
        <span className="book-title" data-test="book-title">
          {title}
        </span>
      </td>
      <td className="right-column">
        <button type="button" onClick={() => handleRemoveBook(id)}>
          REMOVE BOOK
        </button>
      </td>
    </tr>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
