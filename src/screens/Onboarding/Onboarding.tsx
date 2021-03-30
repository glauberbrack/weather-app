import React, { useState, useEffect } from 'react';
import { Image } from 'react-native';

import sun from '~/assets/images/onboarding.png';
import { Loader, Column, Wrapper, Row, Text, Button } from '~/components';
import { theme } from '~/theme';
import styled from 'styled-components/native';

const Onboarding: React.FC = () => {
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
    <Column backgroundColor={theme.colors.white} style={{ flex: 1 }}>
      <OnboardingImage source={sun} />
      <Wrapper>
        <Row mt={250}>
          <Text variant='bigger' color={theme.colors.purple.default}>
            For a{' '}
          </Text>
          <Text variant='bigger' color={theme.colors.blue.n300}>
            better
          </Text>
        </Row>
        <Text mb={50} variant='bigger' color={theme.colors.purple.default}>
          tomorrow
        </Text>
        <Button text='Get started' icon='arrow-right' />
      </Wrapper>
    </Column>
  );
};

const OnboardingImage = styled(Image)`
  margin-top: -50%;
`;

export default Onboarding;
