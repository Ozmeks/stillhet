<script setup lang="ts">
import { ref } from 'vue';
import { useStatsStore } from '@/stores/stats.store';
import { FEELING_TYPES } from '@/constants/feelingTypes';

const statsStore = useStatsStore();

const { name } = defineProps<{ name: string }>();
const selectedfeelingType = ref<string | null>(null);

async function selectFeelingType(feelingTypeId: string) {
  if (selectedfeelingType.value) return;

  selectedfeelingType.value = feelingTypeId;
  await statsStore.setStats(feelingTypeId);
}
</script>

<template>
  <div class="profile-avatar">
    <img
      src="/avatar.png"
      class="profile-avatar__image"
      :alt="name"
      width="130"
      height="130"
      loading="lazy"
    />
    <h2 class="profile-avatar__greeting">Добро пожаловать, {{ name }}!</h2>
    <p class="profile-avatar__question">Как вы сегодня себя чувствуете?</p>

    <div class="profile-avatar__feeling-types" role="group" aria-label="Выберите настроение">
      <div
        v-for="feelingType in FEELING_TYPES"
        :key="feelingType.id"
        class="profile-avatar__feeling-types-item"
      >
        <button
          class="profile-avatar__feeling-types-btn"
          :class="{
            'profile-avatar__feeling-types-btn--active': selectedfeelingType === feelingType.id,
          }"
          :aria-pressed="selectedfeelingType === feelingType.id"
          :aria-label="feelingType.label"
          :disabled="selectedfeelingType !== null"
          @click="selectFeelingType(feelingType.id)"
        >
          <span class="profile-avatar__feeling-types-icon" v-html="feelingType.svg" />
        </button>
        <span class="profile-avatar__feeling-types-label">{{ feelingType.label }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.profile-avatar {
  display: flex;
  flex-direction: column;
  font-size: 18px;
  margin-top: 2rem;
  margin-left: 2rem;
  min-width: 500px;
}
.profile-avatar__image {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  object-fit: cover;
}
.profile-avatar__greeting {
  font-size: 30px;
  font-weight: 500;
  margin-top: 2rem;
}
.profile-avatar__question {
  font-size: 22px;
  font-weight: 400;
}
.profile-avatar__feeling-types {
  display: flex;
  gap: 30px;
  width: 325px;
  margin-top: 1.5rem;
}
.profile-avatar__feeling-types-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  width: 62px;
}
.profile-avatar__feeling-types-btn {
  width: 62px;
  height: 65px;
  display: flex;
  background-color: var(--color-bg-card);
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}
.profile-avatar__feeling-types-btn--active {
  background-color: var(--color-btn-active);
}
.profile-avatar__feeling-types-btn:disabled {
  cursor: not-allowed;
}
.profile-avatar__feeling-types-icon {
  display: flex;
  font-size: 0;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
}
.profile-avatar__feeling-types-icon :deep(svg) {
  width: 100%;
  height: 100%;
}
.profile-avatar__feeling-types-label {
  font-size: 12px;
  text-align: center;
}
</style>
