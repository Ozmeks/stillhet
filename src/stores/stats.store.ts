import { API_ROUTES, client } from '@/api';
import type { StatsResponse } from '@/interfaces/stats.interface';
import { defineStore } from 'pinia';

export const useStatsStore = defineStore('stats', () => {

  async function setStats(type: string, value: number = 1) {
    try {
      await client().post<StatsResponse>(API_ROUTES.stats, {
        type,
        value,
      });
    } catch (error) {
      console.error('Ошибка при отправке статистики:', error);
    }
  }

  return { setStats };
});