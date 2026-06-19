<template>
  <button class="auth-btn">{{ text }}</button>
</template>

<script lang="ts" setup>
const { text } = defineProps<{
  text: string;
}>();
</script>

<style scoped>
.auth-btn {
  width: 300px;
  height: 60px;
  border-radius: 10px;
  background-color: var(--color-btn-login);
  font-size: 25px;
  font-family: inherit;
  color: inherit;
  border: none;
  cursor: pointer;
}
</style>
