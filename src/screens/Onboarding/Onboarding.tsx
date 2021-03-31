import React, { useState, useEffect, Dispatch } from 'react';
import { PermissionsAndroid, Image } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { useDispatch } from 'react-redux';

import { useNavigation } from '@react-navigation/native';
import sun from '~/assets/images/onboarding.png';
import { Loader, Column, Wrapper, Row, Text, Button } from '~/components';
import { userLocationActions } from '~/redux/actions/userLocationActions';
import { theme } from '~/theme';
import styled from 'styled-components/native';

const Onboarding: React.FC = () => {
  const userLocationDispatch = useDispatch<Dispatch<userLocationActions>>();

  const [loading, setIsLoading] = useState(false);
  const [permissionEnabled, setPermissionsEnabled] = useState(false);
  const { navigate } = useNavigation();

  const verifyLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      ]);

      if (
        granted['android.permission.ACCESS_COARSE_LOCATION'] ===
          PermissionsAndroid.RESULTS.GRANTED &&
        granted['android.permission.ACCESS_FINE_LOCATION'] === PermissionsAndroid.RESULTS.GRANTED
      ) {
        setPermissionsEnabled(true);
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  };

  useEffect(() => {
    const getCoordinates = async () => {
      try {
        setIsLoading(true);
        verifyLocationPermission();
        if (permissionEnabled) {
          Geolocation.getCurrentPosition(
            position => {
              const { latitude, longitude } = position.coords;
              userLocationDispatch({
                type: 'FETCH_USER_LOCATION',
                payload: { lat: latitude, long: longitude }
              });
            },
            error => {
              // eslint-disable-next-line no-console
              console.error(error.code, error.message);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
          );
        }
        setIsLoading(false);
      } catch (error) {
        console.log('error', error);
      }
    };
    getCoordinates();
  }, [permissionEnabled, userLocationDispatch]);

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
        <Button text='Get started' icon='arrow-right' onPress={() => navigate('Home')} />
      </Wrapper>
    </Column>
  );
};

const OnboardingImage = styled(Image)`
  margin-top: -50%;
`;

export default Onboarding;
