import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from './stores/auth.store';

export const router = createRouter({
	history: createWebHistory(),
  routes: [
		{
      path: '/login', name: 'login', component:  () => import('./views/LoginView.vue'),
    }, {
      path: '/registration', name: 'registration', component:  () => import('./views/RegistrationView.vue'),
		}, 
    {
      path: '/',
      component: () => import('@/layouts/MainLayout.vue'),
      children: [
        {
          path: 'dashboard', name: 'dashboard', component: () => import('@/views/DashboardView.vue'),
        }, {
          path: 'stats', name: 'stats', component: () => import('@/views/StatsView.vue'),
        }
      ]
    },
	]
});

router.beforeEach((to) => {
	const authStore = useAuthStore();
	if (!authStore.token && to.name !== 'login' && to.name !== 'registration') {
		return { name: 'login' }
	}
});
