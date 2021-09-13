import { shallow } from 'enzyme';
import React from 'react';

import Startup from '../Startup';

jest.mock('../../Startup/Startup');

describe('Startup', () => {
  test('some title', () => {
    const wrapper = shallow(<Startup title="This is a test title" />);

    expect(wrapper).toMatchSnapshot();
  });

  test('no title (should use default)', () => {
    const wrapper = shallow(<Startup />);

    expect(wrapper).toMatchSnapshot();
  });
});
