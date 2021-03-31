import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Wrapper, Row, Loader, Text, Weather, WeatherHourly, WeatherDetails } from '~/components';
import { WeatherProps, HourlyProps } from '~/constants';
import { AppState } from '~/redux/reducers/rootReducer';
import { getWeather, getWeatherHourly } from '~/services/weather';

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
    <Wrapper>
      <Text variant='regular'>Olá!</Text>
      <Weather data={currentWeather} />
      <Row my={20}>
        <WeatherHourly data={hourlyWeather} />
      </Row>
      <WeatherDetails />
    </Wrapper>
  );
};

export default Home;
