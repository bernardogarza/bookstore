const initialState = {
  books: [
    {
      id: '1wmu14vdkgqzfynb',
      title: 'Steve Jobs',
      category: 'Biography',
    },
    {
      id: '1wmu14zvkgqzhqrp',
      title: 'It',
      category: 'Horror',
    },
    {
      id: '11wmu1543kgqziyzv',
      title: 'Ruby on Rails Tutorials',
      category: 'Learning',
    },
  ],
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return {
        books: [...state.books, action.book],
      };
    case 'REMOVE_BOOK':
      return {
        books: state.books.filter((book) => book.id !== action.id),
      };
    default:
      return state;
  }
};

export default bookReducer;
