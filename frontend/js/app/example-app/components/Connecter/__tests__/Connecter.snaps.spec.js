import { shallow } from 'enzyme';
import React from 'react';

import Connecter from '../Connecter';

jest.mock('../../Connecter/Connecter');

describe('Connecter', () => {
  test('some title', () => {
    const wrapper = shallow(<Connecter title="This is a test title" />);

    expect(wrapper).toMatchSnapshot();
  });

  test('no title (should use default)', () => {
    const wrapper = shallow(<Connecter />);

    expect(wrapper).toMatchSnapshot();
  });
});
