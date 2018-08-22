import React from 'react';
import { shallow } from 'enzyme';
import ShoppingApp from './index';

describe('ShoppingApp', () => {
  it('should render a <div />', () => {
    const wrapper = shallow(<ShoppingApp />);
    expect(wrapper.find('div').length).toEqual(1);
  });
});