import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';

import App from '../../src/containers/App';

describe('containers/App', () => {
  it('should say hello', () => {
    const appRender = shallow(<App />);

    expect(appRender.text()).to.contain('Hello');
  });
});
