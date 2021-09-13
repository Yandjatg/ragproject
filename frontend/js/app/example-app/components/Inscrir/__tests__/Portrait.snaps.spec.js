import { shallow } from 'enzyme';
import React from 'react';

import Portrait from '../Inscrir';

jest.mock('../../Portrait/Portrait');

describe('Portrait', () => {
  test('some title', () => {
    const wrapper = shallow(<Portrait title="This is a test title" />);

    expect(wrapper).toMatchSnapshot();
  });

  test('no title (should use default)', () => {
    const wrapper = shallow(<Portrait />);

    expect(wrapper).toMatchSnapshot();
  });
});
