import { ref } from 'vue';
import { API_ROUTES, client } from '@/api';
import type { StatsResponse, StatsAnalyticDataResponse, StatsAnalyticDataSummary } from '@/interfaces/stats.interface';
import { defineStore } from 'pinia';

export const useStatsStore = defineStore('stats', () => {
  const statsSummary = ref<StatsAnalyticDataSummary>();

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

  async function getStats() {
    try {
      const response = await client().get<StatsAnalyticDataResponse>(API_ROUTES.stats);
      statsSummary.value = response.data.data.summary;
    } catch (error) {
      console.error('Ошибка при получении статистики:', error);
    }
  }

  return { setStats, getStats, statsSummary };
});