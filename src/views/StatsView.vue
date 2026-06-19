<template>
  <div class="stats-page">
    <div class="stats-grid">
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
import { computed, onMounted } from 'vue';
import { useStatsStore } from '@/stores/stats.store';
import StatsCard from '@/components/StatsCard.vue';
import { STATS_DATA_COLORS } from '@/constants/statsDataColors';

const statsStore = useStatsStore();
const statsData = computed(() => statsStore.statsSummary);

function getStatValue(id: string): number {
  if (!statsData.value) return 0;

  return statsData.value[id as keyof typeof statsData.value] || 0;
}

onMounted(async () => {
  await statsStore.getStats();
});
</script>

<style scoped>
.stats-page {
  padding: 40px;
  display: flex;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  max-width: 950px;
  width: 100%;
}
</style>
