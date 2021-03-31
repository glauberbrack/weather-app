import React from 'react';
import { FlatList } from 'react-native';
import FastImage from 'react-native-fast-image';

import { Column, Text } from '~/components';
import { theme } from '~/theme';
import { formatTime, formatTemperature } from '~/utils';
import styled from 'styled-components/native';

interface IHourlyProps {
  dt: number;
  temp: number;
  weather: [
    {
      icon: string;
      description: string;
    }
  ];
}

interface IWeatherHourlyProps {
  data: IHourlyProps[];
}

interface IWeatherItem {
  dt: number;
  temp: number;
  weather: [
    {
      icon: string;
      description: string;
    }
  ];
}

const WeatherHourlyComponent: React.FC<IWeatherHourlyProps> = ({ data }) => {
  return (
    <HourlyList
      data={data}
      keyExtractor={index => index.toString()}
      renderItem={({ item }) => (
        <Column
          key={item.dt}
          p={10}
          mr={15}
          borderColor={theme.colors.purple.default}
          backgroundColor={theme.colors.white}
          borderWidth={1}
          alignItems='center'
          justifyContent='space-between'
          width={100}
          height={100}
          borderRadius={15}
        >
          <Text color={theme.colors.purple.default}>{formatTime(item.dt)}</Text>

          <Text variant='bigger' color={theme.colors.purple.default}>
            {formatTemperature(item.temp)}
          </Text>
          <Text color={theme.colors.purple.n300}>{item.weather[0].description}</Text>
        </Column>
      )}
    />
  );
};

const HourlyList = styled(FlatList as new () => FlatList<IWeatherItem>).attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false
})``;

export default WeatherHourlyComponent;
