import React from 'react';
import uniqid from 'uniqid';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const BooksForm = () => (
  <div>
    <input type="text" placeholder="Title" />
    <select>
      {
        categories.map(category => <option value={category} key={uniqid()}>{category}</option>)
      }
    </select>
    <button type="submit">Add Book</button>
  </div>
);

export default BooksForm;
