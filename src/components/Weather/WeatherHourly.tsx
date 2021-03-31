import React from 'react';

import { Column, Text } from '~/components';

const WeatherHourlyComponent: React.FC = () => {
  return (
    <Column
      p={10}
      mr={15}
      backgroundColor='blue'
      alignItems='center'
      justifyContent='space-between'
      width={100}
      borderRadius={4}
    >
      <Text>22:00</Text>
      <Text>imagem</Text>
      <Text>ceu sujo</Text>
      <Text>graus</Text>
    </Column>
  );
};

export default WeatherHourlyComponent;
