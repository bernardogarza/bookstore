import React from 'react';
import { shallow } from 'enzyme';
import Book from './Book.component';
import { findByTestAttr, checkProps } from '../../utils/utils';

const setUp = (props = {}) => {
  const component = shallow(<Book {...props} />);
  return component;
};

describe('Book Component', () => {
  const props = {
    id: '123',
    title: 'Test Title',
    category: 'Test Category',
    handleRemoveBook: () => {},
  };

  describe('Checking PropTypes', () => {
    test('not thorw a warning', () => {
      const propsErr = checkProps(Book, props);
      expect(propsErr).toBeUndefined();
    });
  });

  describe('Have props', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp(props);
    });
    test('should render without errors', () => {
      const component = findByTestAttr(wrapper, 'book-component');
      expect(component.length).toBe(1);
    });
    test('should render a category', () => {
      const category = findByTestAttr(wrapper, 'category');
      expect(category.text()).toContain('Test Category');
    });
    test('should render a title', () => {
      const title = findByTestAttr(wrapper, 'book-title');
      expect(title.text()).toBe('Test Title');
    });
  });
});
