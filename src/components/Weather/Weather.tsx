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
    <Column mt={30} alignItems='flex-end'>
      <Text variant='regular' mb={10}>
        {formatDate(dt)}
      </Text>
      <Row
        p={15}
        backgroundColor={theme.colors.purple.n300}
        justifyContent='space-between'
        alignItems='center'
        borderRadius={4}
        width='100%'
        height={150}
      >
        <Column alignItems='center'>
          <Text variant='regular' color={theme.colors.white}>
            {weather[0].description}
          </Text>
          <Text variant='bigger' color={theme.colors.white}>
            {formatTemperature(main.temp)}
          </Text>
        </Column>
        <Text variant='medium' color={theme.colors.white}>
          {name}
        </Text>
      </Row>
    </Column>
  );
};

export default WeatherComponent;
