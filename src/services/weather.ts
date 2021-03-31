import { API_KEY, params } from '~/constants/';
import fetchClient from '~/providers/fetchClient';

export const getWeather = (lat: number, long: number): Promise<any> =>
  fetchClient.get(`/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`, { params });

export const getWeatherHourly = (lat: number, long: number): Promise<any> =>
  fetchClient.get(`/onecall?lat=${lat}&lon=${long}&appid=${API_KEY}`, { params });
