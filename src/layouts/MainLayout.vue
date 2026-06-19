<template>
  <div class="main-layout">
    <AppNavigation />
    <main class="main-layout__content">
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import AppNavigation from '@/components/AppNavigation.vue';
</script>

<style scoped>
.main-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-layout__content {
  flex: 1;
}
</style>
