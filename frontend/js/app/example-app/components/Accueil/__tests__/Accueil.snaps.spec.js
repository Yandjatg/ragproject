import { shallow } from 'enzyme';
import React from 'react';

import Accueil from '../Accueil';

jest.mock('../../Accueil/Accueil');

describe('Accueil', () => {
  test('some title', () => {
    const wrapper = shallow(<Accueil title="This is a test title" />);

    expect(wrapper).toMatchSnapshot();
  });

  test('no title (should use default)', () => {
    const wrapper = shallow(<Accueil />);

    expect(wrapper).toMatchSnapshot();
  });
});
