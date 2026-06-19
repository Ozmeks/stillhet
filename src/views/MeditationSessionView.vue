<template>
  <div class="meditation">
    <div class="timer-wrapper">
      <TimerIcon />
      <div class="timer-text">{{ formattedTime }}</div>
    </div>
    <h2 class="meditation-title">{{ currentMeditation?.title }}</h2>
    <p class="meditation-description">{{ currentMeditation?.description }}</p>
    <div class="button-groups">
      <TimerStopIcon class="timer-btn" @click="stopTimer" />
      <TimerPauseIcon v-if="isTimerStarted" class="timer-btn" @click="pauseTimer" />
      <TimerPlayIcon v-else class="timer-btn" @click="startTimer" />
      <TimerRepeatIcon class="timer-btn" @click="repeatTimer" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onUnmounted, watchEffect } from 'vue';

import { useRoute, useRouter } from 'vue-router';
import { useMeditationsStore } from '@/stores/meditations.store';
import { useStatsStore } from '@/stores/stats.store';
import TimerIcon from '@/icons/TimerIcon.vue';
import TimerPlayIcon from '@/icons/TimerPlayIcon.vue';
import TimerPauseIcon from '@/icons/TimerPauseIcon.vue';
import TimerRepeatIcon from '@/icons/TimerRepeatIcon.vue';
import TimerStopIcon from '@/icons/TimerStopIcon.vue';

const route = useRoute();
const router = useRouter();
const meditationsStore = useMeditationsStore();
const statsStore = useStatsStore();

const currentMeditation = computed(() => {
  const meditationId = Number(route.params.id);
  return meditationsStore.meditations.find((m) => m.id === meditationId);
});

const timeLeft = ref(0);
const isTimerStarted = ref(false);
let timerId: ReturnType<typeof setInterval> | null = null;

watchEffect(() => {
  if (currentMeditation.value) {
    timeLeft.value = currentMeditation.value.duration_min * 60;
  }
});

const formattedTime = computed(() => {
  const minutes = Math.floor(timeLeft.value / 60);
  const seconds = timeLeft.value % 60;

  // 05 -> 5
  const strMinutes = String(minutes).padStart(2, '0');
  const strSeconds = String(seconds).padStart(2, '0');

  return `${strMinutes}:${strSeconds}`;
});

onUnmounted(() => {
  if (timerId) {
    clearInterval(timerId);
  }
});

function startTimer() {
  if (isTimerStarted.value) return;

  isTimerStarted.value = true;

  timerId = setInterval(() => {
    if (timeLeft.value > 0) {
      timeLeft.value -= 1;
    } else {
      handleTimerFinished();
    }
  }, 1000);
}

function pauseTimer() {
  isTimerStarted.value = false;
  if (timerId) {
    clearInterval(timerId);
  }
}

function stopTimer() {
  pauseTimer();
  if (currentMeditation.value) {
    timeLeft.value = currentMeditation.value.duration_min * 60;
  }
}

function repeatTimer() {
  stopTimer();
  startTimer();
}

async function handleTimerFinished() {
  pauseTimer();

  try {
    if (currentMeditation.value) {
      const typeId = 'duration_min';
      await statsStore.setStats(typeId, currentMeditation.value.duration_min);
    }

    router.push({ name: 'stats' });
  } catch (error) {
    console.error('Не удалось сохранить статистику:', error);
  }
}
</script>

<style scoped>
.meditation {
  display: flex;
  flex-direction: column;
  height: 50vh;
  align-items: center;
  justify-content: center;
}
.timer-wrapper {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}
.timer-text {
  position: absolute;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-size: 44px;
  font-weight: 400;
  font-family: var(--font-family-sans);
}

.meditation-title {
  font-size: 35px;
}
.meditation-description {
  font-size: 25px;
  font-weight: 400;
  opacity: 0.5;
}

.button-groups {
  display: flex;
  flex-direction: row;
  gap: 12px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
.timer-btn {
  cursor: pointer;
  transition:
    transform 0.2s ease,
    opacity 0.2s ease;
}
.timer-btn:hover {
  transform: scale(1.05);
  opacity: 0.9;
}
.timer-btn:active {
  transform: scale(0.95);
}
</style>
