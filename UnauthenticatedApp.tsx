import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '~/screens/Home';
import { Onboarding } from '~/screens/Onboarding';

const Stack = createStackNavigator();

const UnauthenticatedApp: React.FC = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name='Onboarding' component={Onboarding} />
    <Stack.Screen name='Home' component={Home} />
  </Stack.Navigator>
);

export default UnauthenticatedApp;
