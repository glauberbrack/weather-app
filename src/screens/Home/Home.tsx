import React, { useState, useEffect } from 'react';

import { Row, Loader, Text } from '~/components';

const Home: React.FC = () => {
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <Row>
      <Text>Home Page</Text>
    </Row>
  );
};

export default Home;
