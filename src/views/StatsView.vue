<template>
  <div class="stats-page">
    <p v-if="isLoading" class="stats-message" role="status">Загружаем статистику...</p>
    <p v-else-if="loadError" class="stats-message stats-message--error" role="alert">
      {{ loadError }}
    </p>
    <div v-else class="stats-grid">
      <StatsCard
        v-for="item in STATS_DATA_COLORS"
        :color-top="item.colorCardBg"
        :color-bottom="item.colorCardImg"
        :value="getStatValue(item.id)"
        :title="item.title"
        :key="item.id"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { useStatsStore } from '@/stores/stats.store';
import StatsCard from '@/components/StatsCard.vue';
import { STATS_DATA_COLORS } from '@/constants/statsDataColors';

const statsStore = useStatsStore();
const isLoading = ref(true);
const loadError = ref('');

function getStatValue(id: keyof NonNullable<typeof statsStore.statsSummary>): number {
  return statsStore.statsSummary?.[id] ?? 0;
}

onMounted(async () => {
  try {
    await statsStore.getStats();
  } catch (error) {
    console.error('Ошибка при получении статистики:', error);
    loadError.value = 'Не удалось загрузить статистику. Попробуйте обновить страницу.';
  } finally {
    isLoading.value = false;
  }
});
</script>

<style scoped>
.stats-page {
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
  gap: 24px;
  max-width: 950px;
  width: 100%;
}

.stats-message {
  margin: 0;
  text-align: center;
}

.stats-message--error {
  color: #b42318;
}
</style>
