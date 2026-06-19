<template>
  <div class="auth-container">
    <InputString v-model="userName" placeholder="Имя пользователя" />
    <InputString v-model="userPassword" placeholder="Пароль" type="password" />
    <AuthButton text="Войти в приложение" @click="login" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import InputString from '@/components/InputString.vue';
import AuthButton from '@/components/AuthButton.vue';
import { useAuthStore } from '@/stores/auth.store';

const userName = ref('');
const userPassword = ref('');

const authStore = useAuthStore();
const router = useRouter();

async function login() {
  if (userName.value && userPassword.value) {
    await authStore.login(userName.value, userPassword.value);
    router.push({ name: 'dashboard' });
  }
}
</script>

<style scoped></style>
