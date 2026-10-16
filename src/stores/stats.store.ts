import { ref } from 'vue';
import { API_ROUTES, client } from '@/api';
import type {
  StatsResponse,
  StatsAnalyticDataResponse,
  StatsAnalyticDataSummary,
} from '@/interfaces/stats.interface';
import { defineStore } from 'pinia';

export const useStatsStore = defineStore('stats', () => {
  const statsSummary = ref<StatsAnalyticDataSummary>();

  async function setStats(type: string, value = 1) {
    await client().post<StatsResponse>(API_ROUTES.stats, {
      type,
      value,
    });
  }

  async function getStats() {
    const response = await client().get<StatsAnalyticDataResponse>(API_ROUTES.stats);
    statsSummary.value = response.data.data.summary;
  }

  return { setStats, getStats, statsSummary };
});