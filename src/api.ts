import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api/';

export const API_ROUTES = {
  meditations: '/meditations',
};

export function client() {
  return axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
  });
}
