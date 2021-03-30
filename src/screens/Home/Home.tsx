import React, { useState, useEffect } from 'react';

import { Column, Loader, Text, Button } from '~/components';

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
    <Column>
      <Text>Home Page</Text>
      <Button
        text='glauber'
        icon='arrow-right'
        onPress={() => console.log('button on click test')}
      />
    </Column>
  );
};

export default Home;
