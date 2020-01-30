import React from 'react';
import PropTypes from 'prop-types';

const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const CategoryFilter = ({ handleFilterChange }) => (
  <div>
    <select name="categories" onChange={event => handleFilterChange(event.target.value)}>
      {
        categories.map(category => (
          <option value={category} key={category}>{category}</option>
        ))
      }
    </select>
  </div>
);

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
