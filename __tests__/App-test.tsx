import React from 'react';
import renderer from 'react-test-renderer';

import { Column, Row } from '../src/components';

// Note: test renderer must be required after react-native.
describe('Components rendering', () => {
  it('should render Column component', () => {
    renderer.create(<Column />);
  });

  it('should render Row component', () => {
    renderer.create(<Row />);
  });
});
