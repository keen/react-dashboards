import React from 'react'
import { shallow } from 'enzyme';
import Dashboards from '../../lib/Dashboards';

it('Chart component renders correctly', () => {
  const wrapper = shallow(<Dashboards />);
  expect(wrapper).toMatchSnapshot();
});