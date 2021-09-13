import { shallow } from 'enzyme';
import React from 'react';

import Actulite from '../Actulite';

jest.mock('../../Actulite/Actulite');

describe('Actulite', () => {
  test('some title', () => {
    const wrapper = shallow(<Actulite title="This is a test title" />);

    expect(wrapper).toMatchSnapshot();
  });

  test('no title (should use default)', () => {
    const wrapper = shallow(<Actulite />);

    expect(wrapper).toMatchSnapshot();
  });
});
