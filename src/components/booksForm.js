import React, { Component } from 'react';
import { connect } from 'react-redux';
import uniqid from 'uniqid';
import PropTypes from 'prop-types';
import { ADD_BOOK } from '../actions';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

class BooksForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: uniqid(),
      title: '',
      category: categories[0],
    };
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { addBook } = this.props;
    const { state } = this;
    if (state.title !== '') {
      addBook(this.state);
      this.setState({ id: uniqid() });
    }
  }

  render() {
    return (
      <form>
        <input type="text" placeholder="Title" name="title" onChange={this.handleChange.bind(this)} />
        <select onChange={this.handleChange.bind(this)} name="category">
          {
            categories.map(category => <option value={category} key={category}>{category}</option>)
          }
        </select>
        <button type="submit" onClick={this.handleSubmit.bind(this)}>Add Book</button>
      </form>
    );
  }
}

BooksForm.propTypes = {
  addBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  addBook: book => dispatch(ADD_BOOK(book)),
});

export default connect(null, mapDispatchToProps)(BooksForm);
