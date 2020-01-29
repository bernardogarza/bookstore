import React from 'react';

const Book = ({id, title, category}) => (
	<tr>
		<td>{id}</td>
		<td>{title}</td>
		<td>{category}</td>
	</tr>
)

export default Book;