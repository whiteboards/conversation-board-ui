import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import * as React from 'react';

import App from '../App';

describe('<App />', () => {
  it('should render without errors', () => {
    shallow(<App />);
  });

  // it('should correctly increment value', () => {
  //   const AppInstance = mount(<App />);
  //   expect(AppInstance.find('.test-target').text()).to.equal('0');
  //   AppInstance.find('button').simulate('click');
  //   expect(AppInstance.find('.test-target').text()).to.equal('1');
  //   AppInstance.find('button').simulate('click');
  //   expect(AppInstance.find('.test-target').text()).to.equal('2');
  // });
});
