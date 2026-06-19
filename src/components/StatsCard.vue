<template>
  <div class="stats-card">
    <svg
      width="300"
      height="200"
      viewBox="0 0 300 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="stats-card__bg"
    >
      <rect width="300" height="200" rx="20" :fill="colorTop" />

      <path
        d="M64.954 11.692C32.0606 -3.80799 14.8439 2.692 -5.25808e-08 7.192L-5.82027e-07 79.6097C3.46357 94.0755 11.3391 97.692 14.8439 97.692L283.745 97.692C295.868 93.5589 299.745 83.9973 299.745 79.692L299.745 12.1603C279.706 1.82761 218.375 2.19202 190.478 22.692C163.245 -2.80798 82.7451 -7.30801 64.954 11.692Z"
        :fill="colorBottom"
        transform="translate(0, 102)"
      />
    </svg>
    <div class="stats-card__content">
      <span class="stats-card__value">{{ value }}</span>
      <h3 class="stats-card__title">{{ title }}</h3>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  title: string;
  value: number;
  colorTop: string;
  colorBottom: string;
}>();
</script>

<style scoped>
.stats-card {
  position: relative;
  width: 300px;
  height: 200px;
  border-radius: 20px;
  overflow: hidden;
}
.stats-card__bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.stats-card__content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;

  display: flex;
  flex-direction: column;
  padding: 16px;
  box-sizing: border-box;
}
.stats-card__value {
  font-family: var(--font-family-sans);
  font-size: 80px;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 8px;
  margin: 0 0 0 auto;
}
.stats-card__title {
  font-family: var(--font-family-sans);
  font-size: 18px;
  font-weight: 500;
  margin: auto 0 0 0;
}
</style>
