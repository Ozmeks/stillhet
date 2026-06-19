import axios from 'axios';
import { useAuthStore } from './stores/auth.store';

const API_BASE_URL = 'http://localhost:3000/api/';

export const API_ROUTES = {
  meditations: '/meditations',
  profile: '/profile',
  stats: '/stats',
  auth: {
    login: 'auth/login',
    register: 'auth/register',
  }
};

export function client() {
  const authStore = useAuthStore();

  return axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
    headers: {
      Authorization: `Bearer ${authStore.authToken}`,
    },
  });
}
