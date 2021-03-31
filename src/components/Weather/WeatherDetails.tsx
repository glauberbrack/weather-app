import React from 'react';

import { Column, Row, Text } from '~/components';

const WeatherDetailsComponent: React.FC = () => {
  return (
    <Column py={10} px={25} backgroundColor='yellow' width='100%' borderRadius={4}>
      <Row justifyContent='space-between'>
        <Column>
          <Text>NASCER DO SOL</Text>
          <Text>05:00</Text>
        </Column>
        <Column>
          <Text>PÔR DO SOL</Text>
          <Text>20:00</Text>
        </Column>
      </Row>
      <Row justifyContent='space-between' mt={25}>
        <Column>
          <Text>SENSAÇÃO TÉRMICA</Text>
          <Text>15</Text>
        </Column>
        <Column>
          <Text>UMIDADE</Text>
          <Text>87%</Text>
        </Column>
      </Row>
    </Column>
  );
};

export default WeatherDetailsComponent;
