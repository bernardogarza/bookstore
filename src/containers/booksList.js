import React from 'react';
import Book from '../components/book';
import { connect } from 'react-redux';

const BooksList = ({books}) => (
    <table>
        <thead>
            <tr>
                <td>ID</td>
                <td>Title</td>
                <td>Category</td>
            </tr>
        </thead>
        <tbody>
            {books.map((book, i) => (<Book id={book.id} title={book.title} category={book.category} key={i} />))}
        </tbody>
    </table>
)

const mapStateToProps = state => ({
    books: state.bookReducer.books
})

export default connect(mapStateToProps)(BooksList);