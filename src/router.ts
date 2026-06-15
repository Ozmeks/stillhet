import { createRouter, createWebHistory } from 'vue-router';
import StatisticsView from '@/views/StatisticsView.vue';
import HomeView from '@/views/HomeView.vue';

export const router = createRouter({
	history: createWebHistory(),
  routes: [
		{
			path: '/', name: 'home', component: HomeView,
		}, {
			path: '/statistics', name: 'statistics', component: StatisticsView,
		}
	]
});