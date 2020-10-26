import * as actions from './index';

describe('Actions', () => {
  test('should create an action to add book', () => {
    const book = {
      id: '123',
      title: 'Test Title',
      category: 'Test Category',
      handleRemoveBook: () => {},
    };
    const expectedAction = {
      type: 'ADD_BOOK',
      book,
    };
    expect(actions.ADD_BOOK(book)).toEqual(expectedAction);
  });

  test('should create an action to remove book', () => {
    const id = {
      id: '123',
      title: 'Test Title',
      category: 'Test Category',
      handleRemoveBook: () => {},
    };
    const expectedAction = {
      type: 'REMOVE_BOOK',
      id,
    };
    console.log(actions.REMOVE_BOOK(id), expectedAction);
  });

  test('should create an action to add book', () => {
    const category = {
      id: '123',
      title: 'Test Title',
      category: 'Test Category',
      handleRemoveBook: () => {},
    };
    const expectedAction = {
      type: 'CHANGE_FILTER',
      category,
    };
    console.log(actions.CHANGE_FILTER(category), expectedAction);
  });
});
