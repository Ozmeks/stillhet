<template>
  <div class="meditation-card">
    <div class="title">{{ meditation.title }}</div>
    <div class="description">{{ meditation.description }}</div>
    <div class="duration">{{ meditation.duration_min }} мин</div>
  </div>
</template>

<script setup lang="ts">
import type { Meditation } from '@/interfaces/meditation.interface';

interface Props {
  meditation: Meditation;
}

const { meditation } = defineProps<Props>();
</script>

<style scoped>
.meditation-card {
  background: var(--color-bg-card);
  color: var(--color-fg-card);

  border: 1px solid;
  border-radius: 20px;
  padding: 20px;
}
.title {
  font-size: 25px;
}
.description {
  font-size: 15px;
}
.duration {
  font-size: 15px;
  color: var(--color-bg);
  text-align: right;
}
</style>
