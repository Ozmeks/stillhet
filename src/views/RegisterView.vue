<template>
  <div class="auth-container">
    <InputString v-model="userEmail" placeholder="Электронная почта" />
    <InputString v-model="userName" placeholder="Имя пользователя" />
    <InputString v-model="userPassword" placeholder="Пароль" type="password" />
    <AuthButton text="Создать аккаунт" @click="createAccount" />
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
const userEmail = ref('');

const authStore = useAuthStore();
const router = useRouter();

async function createAccount() {
  if (userName.value && userPassword.value && userEmail.value) {
    await authStore.register(userName.value, userEmail.value, userPassword.value);
    router.push({ name: 'login' });
  }
}
</script>

<style scoped></style>
