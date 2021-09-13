import { shallow } from 'enzyme';
import React from 'react';

import Interview from '../Interview';

jest.mock('../../Interview/Interview');

describe('Interview', () => {
  test('some title', () => {
    const wrapper = shallow(<Interview title="This is a test title" />);

    expect(wrapper).toMatchSnapshot();
  });

  test('no title (should use default)', () => {
    const wrapper = shallow(<Interview />);

    expect(wrapper).toMatchSnapshot();
  });
});
