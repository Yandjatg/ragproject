import { shallow } from 'enzyme';
import React from 'react';

import Innovation from '../Innovation';

jest.mock('../../Innovation/Innovation');

describe('Innovation', () => {
  test('some title', () => {
    const wrapper = shallow(<Innovation title="This is a test title" />);

    expect(wrapper).toMatchSnapshot();
  });

  test('no title (should use default)', () => {
    const wrapper = shallow(<Innovation />);

    expect(wrapper).toMatchSnapshot();
  });
});
