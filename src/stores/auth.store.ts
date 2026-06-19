import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { client, API_ROUTES } from '@/api';
import type { LoginResponse } from '@/interfaces/loginResponse.interface';
import type { RegisterResponse }  from '@/interfaces/registerResponse.interface';

export const useAuthStore = defineStore('auth', () => { 
  const token = ref<string>();

  const TOKEN_KEY = 'token-key';
  
  const initialValue = localStorage.getItem(TOKEN_KEY);
  if (initialValue) {
    token.value = initialValue;
  }

  function setToken(newToken: string) {
    token.value = newToken;
    localStorage.setItem(TOKEN_KEY, newToken);
  }

  const authToken = computed(() => token.value);

  function removeToken() {
    token.value = undefined;
    localStorage.removeItem(TOKEN_KEY);
  }

  async function login(username: string, password: string) {
    try {
      const response = await client().post<LoginResponse>(API_ROUTES.auth.login, {
        username,
        password,
      });

      const tokenFromServer = response.data.data.token;

      setToken(tokenFromServer);
    } catch(error) {
      console.error('Ошибка авторизации:', error);
    }
  }

  async function register(username: string, email: string, password: string) {
    try {
      const response = await client().post<RegisterResponse>(API_ROUTES.auth.login, {
        username,
        email,
        password,
      });

    } catch(error) {
      console.error('Ошибка регистрации:', error);
    }
  }

  return { token, authToken, removeToken, login, register };
});