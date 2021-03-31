import moment from 'moment';
import 'moment/locale/pt-br';

moment.locale('pt-br');

export const formatDate = (date: number): string => {
  const parsedUnix = moment.unix(date);
  const parsedDate = moment(parsedUnix).format('DD [de] MMMM');

  return parsedDate;
};

export const formatTemperature = (temperature: number): string => {
  const round = Math.round(temperature);
  const parsedTemperature = `${String(round)}º`;

  return parsedTemperature;
};

export const formatTime = (date: number): string => {
  const parsedUnix = moment.unix(date);
  const parsedDate = moment(parsedUnix).format('LT');

  return parsedDate;
};

export const formatHumidity = (humidity: number): string => `${String(humidity)}%`;
