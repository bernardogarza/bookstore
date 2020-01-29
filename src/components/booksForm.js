import React from 'react';

const categories = ["Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"];

const BooksForm = () => (
	<div>
		<input type='text' placeholder='Title' />
		<select>
			{
				categories.map((category, i) => 
					<option value={category} key={i}>{category}</option>
				)
			}
		</select>
		<button>Add Book</button>
	</div>
)

export default BooksForm;
