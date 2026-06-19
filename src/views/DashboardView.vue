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

onMounted(() => {
  store.fetchMeditations();
  profileStore.fetchProfile();
});
</script>

<style scoped>
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 20px;
  width: 100%;
}
.home {
  display: flex;
}
</style>
