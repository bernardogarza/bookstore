const randomId = () => Math.ceil(Math.random() * 100);

const initialState = {
    books: [
        {
            id: randomId(),
            title: 'Steve Jobs',
            category: 'Biography'
        },
        {
            id: randomId(),
            title: 'It',
            category: 'Horror'
        },
        {
            id: randomId(),
            title: 'Ruby on Rails Tutorials',
            category: 'Learning'
        }
    ]
}

const bookReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_BOOK': return {
            books: [...state.books, action.book]
        };
        case 'REMOVE_BOOK': return {
            books: state.books.map(book => book.id !== action.id)
        }
        default: return state
    }
}

export default bookReducer;
