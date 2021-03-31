import { API_KEY } from '~/constants/api-key';
import fetchClient from '~/providers/fetchClient';

export const getWeather = (lat: number, long: number): Promise<void> =>
  fetchClient.get(`/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`);

export const getWeatherHoruly = (lat: number, long: number): Promise<void> =>
  fetchClient.get(`/onecall?lat=${lat}&lon=${long}&appid=${API_KEY}`);
