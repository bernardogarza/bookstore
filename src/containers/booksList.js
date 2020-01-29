import React from 'react';
import Book from '../components/book';
import { connect } from 'react-redux';

const BooksList = () => (
    <table>
        <tr>
            <td>ID</td>
            <td>Title</td>
            <td>Category</td>
        </tr>
        <Book id='1' title='title 1' category='category 1' />
        <Book id='2' title='title 2' category='category 2' />
    </table>
)

const mapStateToProps = state => ({

})

export default connect(mapStateToProps)(BooksList);