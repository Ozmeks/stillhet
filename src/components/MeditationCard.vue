<template>
  <div class="meditation-card">
    <div class="title">{{ meditation.title }}</div>
    <div class="description">{{ meditation.description }}</div>
    <div class="footer">
      <router-link
        :to="{ name: 'meditation-session', params: { id: meditation.id } }"
        custom
        v-slot="{ navigate }"
      >
        <button class="start-btn" @click="navigate" role="link">
          Начать
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.5 0C2.91568 0 0 2.91596 0 6.5C0 10.084 2.91568 13 6.5 13C10.0843 13 13 10.084 13 6.5C13 2.91596 10.0843 0 6.5 0ZM9.08403 6.72773L5.29237 9.16523C5.24794 9.19405 5.19662 9.20834 5.14584 9.20834C5.10141 9.20834 5.05644 9.19722 5.01625 9.17528C4.92896 9.12768 4.875 9.03668 4.875 8.9375V4.0625C4.875 3.96332 4.92896 3.87232 5.01625 3.82472C5.10194 3.77764 5.20932 3.78054 5.29237 3.83477L9.08403 6.27227C9.16127 6.32199 9.20834 6.40796 9.20834 6.5C9.20834 6.59204 9.16127 6.67799 9.08403 6.72773Z"
              fill="white"
            />
          </svg>
        </button>
      </router-link>

      <div class="duration">{{ meditation.duration_min }} мин</div>
    </div>
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

  display: flex;
  flex-direction: column;
  gap: 2px;

  height: 180px;
  box-sizing: border-box;
  overflow: hidden;
}
.title {
  font-size: 25px;
}
.description {
  font-size: 15px;
  flex-grow: 1;
}
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
}
.start-btn {
  cursor: pointer;
  border: none;
  height: 38px;
  padding: 8px 16px;
  border-radius: 10px;
  background-color: var(--color-bg);
  font-size: 15px;
  font-family: inherit;
  color: var(--color-fg);
  display: flex;
  gap: 10px;
  align-items: center;
}
.duration {
  font-size: 15px;
  color: var(--color-bg);
  text-align: right;
}
</style>
