import React from 'react';
import Book from '../components/book';
import { connect } from 'react-redux';

const BooksList = books => (
    <table>
        <tr>
            <td>ID</td>
            <td>Title</td>
            <td>Category</td>
        </tr>
        <tbody>
            {console.log(books)}
            {books.map((book, i) => (<Book id={book.id} title={book.title} category={book.category} key={i} />))}
        </tbody>
        {/* <Book id='1' title='title 1' category='category 1' /> */}
        {/* <Book id='2' title='title 2' category='category 2' /> */}
    </table>
)

const mapStateToProps = state => ({
    books: state.bookReducer
})

export default connect(mapStateToProps)(BooksList);