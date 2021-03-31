import React from 'react';

import { Row, Column, Text } from '~/components';
import { theme } from '~/theme';
import { formatDate, formatTemperature } from '~/utils';

interface IWeatherProps {
  info: {
    dt: number;
    name: string;
    main: {
      temp: number;
    };
    weather: [
      {
        description: string;
      }
    ];
  };
}

const WeatherComponent: React.FC<IWeatherProps> = ({ data }) => {
  const { dt, name, main, weather } = data;

  return (
    <Column mt={30}>
      <Row
        p={15}
        backgroundColor={theme.colors.purple.n400}
        justifyContent='space-between'
        alignItems='center'
        borderRadius={15}
        width='100%'
        height={150}
      >
        <Column>
          <Text variant='bigger' color={theme.colors.yellow.default}>
            {formatTemperature(main.temp)}
          </Text>
          <Text variant='regular' color={theme.colors.white}>
            {weather[0].description}
          </Text>
        </Column>
        <Column alignItems='flex-end'>
          <Text variant='medium' color={theme.colors.white}>
            {name}
          </Text>
          <Text variant='small' mb={10} color={theme.colors.yellow.default}>
            {formatDate(dt)}
          </Text>
        </Column>
      </Row>
    </Column>
  );
};

export default WeatherComponent;
