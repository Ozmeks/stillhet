<template>
  <div class="home">
    <UserProfile :name="userName" />
    <div class="card-grid">
      <p v-if="isLoading" class="status" aria-live="polite">Загрузка…</p>

      <div v-else-if="loadError" class="status status--error" role="alert">
        <p>{{ loadError }}</p>
        <button type="button" @click="loadData">Повторить</button>
      </div>

      <template v-else>
        <MeditationCard
          v-for="meditation in meditationsStore.meditations"
          :key="meditation.id"
          :meditation="meditation"
        />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useMeditationsStore } from '@/stores/meditations.store';
import { useProfileStore } from '@/stores/profile.store';
import MeditationCard from '@/components/MeditationCard.vue';
import UserProfile from '@/components/UserProfile.vue';

const meditationsStore = useMeditationsStore();
const profileStore = useProfileStore();

const isLoading = ref(true);
const loadError = ref('');

const userName = computed(() => profileStore.profile?.username || 'Пользователь');

async function loadData() {
  isLoading.value = true;
  loadError.value = '';

  const [meditationsResult, profileResult] = await Promise.allSettled([
    meditationsStore.fetchMeditations(),
    profileStore.fetchProfile(),
  ]);

  if (meditationsResult.status === 'rejected') {
    console.error('Не удалось загрузить список медитаций:', meditationsResult.reason);
    loadError.value = 'Не удалось загрузить медитации. Попробуйте ещё раз.';
  }
  if (profileResult.status === 'rejected') {
    console.error('Не удалось загрузить профиль:', profileResult.reason);
  }

  isLoading.value = false;
}

onMounted(loadData);
</script>

<style scoped>
.home {
  display: flex;
  width: 100%;
  box-sizing: border-box;
  padding-top: 60px;
}
.status {
  grid-column: 1 / -1;
  text-align: center;
}
.status--error {
  color: var(--color-error, #b42318);
}
.card-grid {
  margin: 50px auto 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
  max-width: 800px;
  width: 100%;
}
</style>
