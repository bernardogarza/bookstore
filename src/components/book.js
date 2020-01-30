import React from 'react';
import PropTypes from 'prop-types';

import './book.scss';

const Book = ({
  id, title, category, handleRemoveBook,
}) => (
    <tr>
      <td>{category}</td>
      <td>{title}</td>
      <td><button type="button" onClick={() => handleRemoveBook(id)}>X</button></td>
    </tr>
  );

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
