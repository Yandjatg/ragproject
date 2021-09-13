import { shallow } from 'enzyme';
import React from 'react';

import Diaspora from '../Diaspora';

jest.mock('../../Diaspora/Diaspora');

describe('Diaspora', () => {
  test('some title', () => {
    const wrapper = shallow(<Diaspora title="This is a test title" />);

    expect(wrapper).toMatchSnapshot();
  });

  test('no title (should use default)', () => {
    const wrapper = shallow(<Diaspora />);

    expect(wrapper).toMatchSnapshot();
  });
});
