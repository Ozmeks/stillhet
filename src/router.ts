import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from './stores/auth.store';

export const router = createRouter({
	history: createWebHistory(),
  routes: [
		{
      path: '/login', name: 'login', component:  () => import('./views/LoginView.vue'),
    }, {
      path: '/register', name: 'register', component:  () => import('./views/RegisterView.vue'),
		}, 
    {
      path: '/',
      component: () => import('@/layouts/MainLayout.vue'),
      redirect: '/dashboard',
      children: [
        {
          path: 'dashboard', name: 'dashboard', component: () => import('@/views/DashboardView.vue'),
        }, {
          path: 'stats', name: 'stats', component: () => import('@/views/StatsView.vue'),
        },
        {
          path: 'meditation/:id', 
          name: 'meditation-session', 
          component: () => import('@/views/MeditationSessionView.vue'),
        }
      ]
    },
	]
});

router.beforeEach((to) => {
	const authStore = useAuthStore();
	if (!authStore.token && to.name !== 'login' && to.name !== 'register') {
		return { name: 'login' }
	}
});
