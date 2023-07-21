<script setup lang="ts">
import IconEmployees from '@/shared/components/icons/IconEmployees.vue';
import IconRecruitment from '@/shared/components/icons/IconRecruitment.vue';
import { useUsers } from "@/composables/useUser";
import { useRoute } from 'vue-router';

const { logoutUser } = useUsers()

const route = useRoute();

</script>

<template>
  <div class="flex flex-col justify-between h-full ">
    <div>
      <img class="mx-auto" src="@/assets/imgs/logo_black.svg" alt="logo culqui">
    </div>
    <nav class="min-h-4/5 h-4/5">
      <ul class="list-none">
        <li class="my-2 py-3.5">
          <RouterLink class="inline-flex items-center text-sm font-bold text-gray-900" :class="route.name === 'Employees' ? 'nav-active' : ''"  to="/employees">
            <IconEmployees class="mr-2" /> Empleados
          </RouterLink>
        </li>
        <li>
          <RouterLink class="inline-flex items-center text-sm font-bold text-gray-900" to="/recruitment">
            <IconRecruitment class="mr-2" /> Reclutamiento
          </RouterLink>
        </li>
      </ul>
    </nav>
    <div class="my-4">
      <button @click="logoutUser()" class="text-center w-full block rounded-[10px] text-gray-900 px-3 py-4 text-base font-bold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 border-2 border-gray-900">Salir</button>
    </div>
  </div>
</template>

<style scoped></style>