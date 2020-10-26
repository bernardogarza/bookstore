import reducer from './book';

describe('book reducer', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
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
    });
  });
});
