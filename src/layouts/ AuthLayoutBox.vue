<template>
  <div class="auth-container">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import InputString from '@/components/InputString.vue';

const userName = ref('');
const userPassword = ref('');
</script>

<style scoped>
.auth-container {
  width: 100vw;
  height: 100vh;
  background-image: url('@/assets/background-image.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: center;
  align-items: center;
}
</style>
