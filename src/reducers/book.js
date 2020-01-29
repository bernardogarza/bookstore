const initialState = {
    books: [
        {
            id: 1,
            title: 'Steve Jobs',
            category: 'Biography'
        },
        {
            id: 2,
            title: 'It',
            category: 'Horror'
        },
        {
            id: 3,
            title: 'Ruby on Rails Tutorials',
            category: 'Learning'
        }
    ]
}

const bookReducer = (state = initialState, action) => {
    return state
}

export default bookReducer;
