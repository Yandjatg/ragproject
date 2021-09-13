import { shallow } from 'enzyme';
import React from 'react';

import Footer from '../Footer';

jest.mock('../../Footer/Footer');

describe('Footer', () => {
  test('some title', () => {
    const wrapper = shallow(<Footer title="This is a test title" />);

    expect(wrapper).toMatchSnapshot();
  });

  test('no title (should use default)', () => {
    const wrapper = shallow(<Footer />);

    expect(wrapper).toMatchSnapshot();
  });
});
