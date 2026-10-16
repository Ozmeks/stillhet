<template>
  <img :src="timerImage" :width="size" :height="size" alt="" decoding="async" class="timer-image" />
</template>

<script setup lang="ts">
import timerImage from '@/assets/timer.webp';

withDefaults(defineProps<{ size?: number | string }>(), { size: 250 });
</script>

<style scoped>
.timer-image {
  display: block;
  border-radius: 50%;
  object-fit: cover;
}
</style>
