import { shallow } from 'enzyme';
import React from 'react';

import NavBar from '../NavBar';

jest.mock('../../NavBar/NavBar');

describe('NavBar', () => {
  test('some title', () => {
    const wrapper = shallow(<NavBar title="This is a test title" />);

    expect(wrapper).toMatchSnapshot();
  });

  test('no title (should use default)', () => {
    const wrapper = shallow(<NavBar />);

    expect(wrapper).toMatchSnapshot();
  });
});
