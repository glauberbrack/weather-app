import React from 'react';
import { Platform } from 'react-native';

import { Column, Row, Text } from '~/components';
import { theme } from '~/theme';
import { formatTime, formatTemperature, formatHumidity } from '~/utils';

interface IWeatherDetailsProps {
  details: {
    main: {
      feels_like: number;
      humidity: number;
    };
    sys: {
      sunrise: number;
      sunset: number;
    };
  };
}

const WeatherDetailsComponent: React.FC<IWeatherDetailsProps> = ({ data }) => {
  const { feels_like, humidity } = data.main;
  const { sunrise, sunset } = data.sys;

  return (
    <Column
      py={10}
      px={25}
      backgroundColor={theme.colors.purple.n400}
      width='100%'
      height={150}
      borderRadius={4}
    >
      <Row justifyContent='space-between'>
        <Column>
          <Text fontWeight={Platform.OS === 'ios' ? 600 : 700} color={theme.colors.yellow.default}>
            NASCER DO SOL
          </Text>
          <Text color={theme.colors.white}>{formatTime(sunrise)}</Text>
        </Column>
        <Column>
          <Text fontWeight={Platform.OS === 'ios' ? 600 : 700} color={theme.colors.yellow.default}>
            PÔR DO SOL
          </Text>
          <Text color={theme.colors.white}>{formatTime(sunset)}</Text>
        </Column>
      </Row>
      <Row mt={25}>
        <Column>
          <Text fontWeight={Platform.OS === 'ios' ? 600 : 700} color={theme.colors.yellow.default}>
            SENSAÇÃO TÉRMICA
          </Text>
          <Text color={theme.colors.white}>{formatTemperature(feels_like)}</Text>
        </Column>
        <Column ml={90}>
          <Text fontWeight={Platform.OS === 'ios' ? 600 : 700} color={theme.colors.yellow.default}>
            UMIDADE
          </Text>
          <Text color={theme.colors.white}>{formatHumidity(humidity)}</Text>
        </Column>
      </Row>
    </Column>
  );
};

export default WeatherDetailsComponent;
