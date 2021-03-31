export interface UserLocation {
  lat: number;
  long: number;
}

export interface WeatherProps {
  dt: number;
  name: string;
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  sys: {
    sunrise: number;
    sunset: number;
  };
  weather: [
    {
      description: string;
    }
  ];
}

export interface HourlyProps {
  dt: number;
  temp: number;
  weather: [
    {
      icon: string;
      description: string;
    }
  ];
}
