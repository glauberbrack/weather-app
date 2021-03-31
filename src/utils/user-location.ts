import AsyncStorage from '@react-native-community/async-storage';
import { ASYNC_STORAGE_USER_LOCATION } from '~/constants';

export const getUserLocationPermission = (): Promise<void> =>
  AsyncStorage.getItem(ASYNC_STORAGE_USER_LOCATION);

export const setUserLocationPermission = (): Promise<void> =>
  AsyncStorage.setItem(ASYNC_STORAGE_USER_LOCATION, 'true');

export const removeUserLocationPermission = (): Promise<void> =>
  AsyncStorage.removeItem(ASYNC_STORAGE_USER_LOCATION);
