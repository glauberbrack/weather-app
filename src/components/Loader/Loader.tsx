import React from 'react';

import Loader from '~/assets/animations/loader.json';
import { Column } from '~/components';
import LottieView from 'lottie-react-native';

const LoaderComponent = () => (
  <Column alignItems='center' flex={1} justifyContent='center' mb={24} mt={24}>
    <LottieView
      autoPlay
      loop
      renderMode='SOFTWARE'
      source={Loader}
      style={{ width: 150, height: 150 }}
    />
  </Column>
);

export default LoaderComponent;
