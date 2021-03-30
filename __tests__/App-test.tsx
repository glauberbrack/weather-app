import React from 'react';
import { Text } from 'react-native';
import renderer from 'react-test-renderer';

import { Column, Row, SingleItemCard } from '../src/components';

// Note: test renderer must be required after react-native.
describe('Components rendering', () => {
  it('should render Column component', () => {
    renderer.create(<Column />);
  });

  it('should render Row component', () => {
    renderer.create(<Row />);
  });

  it('should render SingleItemCard component', () => {
    renderer.create(
      <SingleItemCard>
        <Text>Single card </Text>
      </SingleItemCard>
    );
  });
});
