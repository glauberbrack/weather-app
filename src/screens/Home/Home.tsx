import React, { useState, useEffect } from 'react';

import { Wrapper, Row, Loader, Text, Weather, WeatherHourly, WeatherDetails } from '~/components';
import { getWeatherHoruly } from '~/services/weather';

const Home: React.FC = () => {
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    const loadLocation = async () => {
      const request = await getWeatherHoruly(37.4219983, -122.084);
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
