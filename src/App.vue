<template>
  <div class="app">
    <AppNavigation />
    <main class="app__content">
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import AppNavigation from './components/AppNavigation.vue';
</script>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.app__content {
  flex: 1;
}
</style>
