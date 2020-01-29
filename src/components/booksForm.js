import React, { Component } from 'react';
import uniqid from 'uniqid';
import { connect } from 'react-redux';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

class BooksForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      title: '',
      category: categories[0],
    };
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="Title" name="title" onChange={this.handleChange.bind(this)} />
        <select onChange={this.handleChange.bind(this)} name="category">
          {
            categories.map(category => <option value={category} key={uniqid()}>{category}</option>)
          }
        </select>
        <button type="submit">Add Book</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({

});

export default connect(null, mapDispatchToProps)(BooksForm);
