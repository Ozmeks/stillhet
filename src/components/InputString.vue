<template>
  <input class="input-string" v-model="data" />
</template>

<script lang="ts" setup>
const data = defineModel<string>();
</script>

<style scoped>
.input-string {
  border: none;
  background-color: transparent;
  border-bottom: 1px solid var(--color-fg);
  color: var(--color-fg);
  font-size: 18px;
  font-weight: 400;
  width: 300px;
  height: 40px;
  padding: 0 12px;
  box-sizing: border-box;
  outline: none;
}
.input-string::placeholder {
  color: var(--color-fg-inactive);
  opacity: 1;
}
</style>
