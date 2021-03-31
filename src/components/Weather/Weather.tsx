import React, { ReactNode } from 'react';

import { Row, Column, Text } from '~/components';

interface IWeatherComponentProps {
  children: ReactNode;
}

const WeatherComponent: React.FC<IWeatherComponentProps> = ({}: IWeatherComponentProps) => {
  return (
    <Row
      p={15}
      backgroundColor='red'
      justifyContent='space-between'
      alignItems='center'
      borderRadius={4}
      width='100%'
    >
      <Column alignItems='center'>
        <Text variant='regular'>céu sujo</Text>
        <Text variant='bigger'>20°</Text>
      </Column>
      <Text variant='medium'>São Paulo</Text>
    </Row>
  );
};

export default WeatherComponent;
