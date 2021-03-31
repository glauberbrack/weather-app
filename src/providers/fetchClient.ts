import axios from 'axios';

const fetchClient = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5'
});

export default fetchClient;
