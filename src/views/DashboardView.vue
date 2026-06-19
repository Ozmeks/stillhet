<template>
  <div class="home">
    <UserProfile :name="userName" />
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
import { computed } from 'vue';
import { useMeditationsStore } from '@/stores/meditations.store';
import { useProfileStore } from '@/stores/profile.store';
import { onMounted } from 'vue';
import MeditationCard from '@/components/MeditationCard.vue';
import UserProfile from '@/components/UserProfile.vue';

const store = useMeditationsStore();
const profileStore = useProfileStore();

const userName = computed(() => {
  return profileStore.profile?.username || 'Пользователь';
});

onMounted(async () => {
  await store.fetchMeditations();
  await profileStore.fetchProfile();
});
</script>

<style scoped>
.home {
  display: flex;
  width: 100%;
  box-sizing: border-box;
  padding-top: 60px;
}
.card-grid {
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  max-width: 800px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}
</style>
