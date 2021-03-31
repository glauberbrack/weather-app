import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import {
  Wrapper,
  Row,
  Column,
  Loader,
  Text,
  Weather,
  WeatherHourly,
  WeatherDetails
} from '~/components';
import { WeatherProps, HourlyProps } from '~/constants';
import { AppState } from '~/redux/reducers/rootReducer';
import { getWeather, getWeatherHourly } from '~/services/weather';
import { theme } from '~/theme';

const Home: React.FC = () => {
  const { userLocation } = useSelector((state: AppState) => state.userLocation);

  const [loading, setIsLoading] = useState(true);
  const [currentWeather, setCurrentWeather] = useState<WeatherProps>();
  const [hourlyWeather, sethourlyWeather] = useState<HourlyProps>();

  useEffect(() => {
    const loadWeather = async () => {
      const current = await getWeather(userLocation.lat, userLocation.long);
      const hourly = await getWeatherHourly(userLocation.lat, userLocation.long);

      Promise.all([current, hourly])
        .then(weather => {
          setCurrentWeather(weather[0].data);
          sethourlyWeather(weather[1].data.hourly);
          setIsLoading(false);
        })
        .catch(error => {
          // eslint-disable-next-line no-console
          console.log(error);
        });
    };

    loadWeather();
  }, [userLocation.lat, userLocation.long]);

  if (loading) {
    return <Loader />;
  }
  return (
    <Column backgroundColor={theme.colors.purple.default} p={25} flex={1}>
      <Text variant='regular' color={theme.colors.white}>
        Olá!
      </Text>
      <Weather data={currentWeather} />
      <Row my={40}>
        <WeatherHourly data={hourlyWeather} />
      </Row>
      <WeatherDetails data={currentWeather} />
    </Column>
  );
};

export default Home;
