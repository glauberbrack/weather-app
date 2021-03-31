import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Wrapper, Row, Loader, Text, Weather, WeatherHourly, WeatherDetails } from '~/components';
import { AppState } from '~/redux/reducers/rootReducer';
import { getWeatherHoruly } from '~/services/weather';

const Home: React.FC = () => {
  const { userLocation } = useSelector((state: AppState) => state.userLocation);
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    const loadLocation = async () => {
      const request = await getWeatherHoruly(37.4219983, -122.084);
      console.log('teste', userLocation);
    };
    loadLocation();
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <Wrapper>
      <Text variant='regular'>Olá!</Text>
      <Weather />
      <Row my={20}>
        <WeatherHourly />
        <WeatherHourly />
        <WeatherHourly />
      </Row>
      <WeatherDetails />
    </Wrapper>
  );
};

export default Home;
