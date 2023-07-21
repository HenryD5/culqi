<script setup lang="ts">
import { reactive } from 'vue';
import AlertType from './AlertType.vue';
import { useUserStore } from '@/store/user'
import { useUsers } from "@/composables/useUser";

const user = useUserStore();
const { authUser } = useUsers();

const state = reactive({
  email: "",
  password: "",
});

async function login() {
   await authUser(state.email, state.password)
}

</script>

<template>
  <form class="w-120" @submit.prevent="login()">
    <h4 class="text-2xl font-bold mt-3 mb-6 text-center">Inicia sesión</h4>
    <div class="my-5">
      <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Correo electrónico<span
          class="text-failed"> *</span></label>
      <div class="mt-2">
        <input id="email" name="email" type="email" autocomplete="email" placeholder="Ingresa el correo electrónico"
          v-model="state.email" required autofocus
          class="block w-full border-0 py-4 px-6 rounded-[10px] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-extra-light placeholder:text-gray-light  placeholder:font-normal focus:ring-2 focus:ring-inset focus:ring-success text-sm font-medium" />
      </div>
    </div>
    <div class="mt-5 mb-7">
      <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Contraseña<span class="text-failed">
          *</span></label>
      <div class="mt-2">
        <input id="password" name="password" type="password" autocomplete="password" placeholder="Ingresa la contraseña"
          v-model="state.password"
          class="block w-full border-0 py-4 px-6 rounded-[10px] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-extra-light placeholder:text-gray-light  placeholder:font-normal focus:ring-2 focus:ring-inset focus:ring-success text-sm font-medium" />
      </div>
    </div>

    <AlertType v-if="user.msgError" type="failed" :text="user.msgError" />

    <div class="mt-7 mb-7">
      <button type="submit"
        class="block w-full rounded-[10px] bg-gray-900 px-3 py-4 text-base font-bold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-success btn-login"
        :class="{ 'btn-loading': user.loading }">
        <span class="btn-text">Iniciar sesión</span>
      </button>
    </div>
    <div class="my-3 text-center">
      <p class="text-sm text-gray-light">¿Eres nuevo aquí? <RouterLink to="/register" class="text-success">Crea una
          cuenta</RouterLink>
      </p>
    </div>
  </form>
</template>

<style scoped></style>