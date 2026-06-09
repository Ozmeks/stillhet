<template>
  <div class="card-grid">
    <MeditationCard
      v-for="meditation in store.meditations"
      :key="meditation.id"
      :meditation="meditation"
    />
  </div>
</template>

<script setup lang="ts">
import { useMeditationsStore } from '@/stores/meditations.store';
import { onMounted } from 'vue';
import MeditationCard from './components/MeditationCard.vue';

const store = useMeditationsStore();

onMounted(() => {
  store.fetchMeditations();
});
</script>

<style scoped>
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 20px;
  width: 100%;
}
</style>
