import { shallow } from 'enzyme';
import React from 'react';

import Politique from '../Politique';

jest.mock('../../Politique/Politique');

describe('Politique', () => {
  test('some title', () => {
    const wrapper = shallow(<Politique title="This is a test title" />);

    expect(wrapper).toMatchSnapshot();
  });

  test('no title (should use default)', () => {
    const wrapper = shallow(<Politique />);

    expect(wrapper).toMatchSnapshot();
  });
});
