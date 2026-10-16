import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { Meditation } from '@/interfaces/meditation.interface';
import { API_ROUTES, client } from '@/api';

export const useMeditationsStore = defineStore('meditations', () => {
  const meditations = ref<Meditation[]>([]);
  const hasFetched = ref(false);

  async function fetchMeditations() {
    try {
      const { data } = await client().get(API_ROUTES.meditations);
      meditations.value = data.data.meditations;
      hasFetched.value = true;
    } catch (error) {
      console.error('Error fetching meditations:', error);
      throw error;
    }
  }

  return {
    meditations,
    hasFetched,
    fetchMeditations,
  };
});
