<template>
  <div class="app">
    <nav class="nav">
      <ProfileAvatar :name="name" />
    </nav>
    <div class="card-grid">
      <MeditationCard
        v-for="meditation in store.meditations"
        :key="meditation.id"
        :meditation="meditation"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMeditationsStore } from '@/stores/meditations.store';
import { onMounted } from 'vue';
import MeditationCard from './components/MeditationCard.vue';
import ProfileAvatar from './components/ProfileAvatar.vue';

const store = useMeditationsStore();

onMounted(() => {
  store.fetchMeditations();
});

const name = 'Наталья';
</script>

<style scoped>
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 20px;
  width: 100%;
}
.app {
  display: flex;
  margin-top: 150px;
}
.nav {
  min-width: 500px;
}
</style>
