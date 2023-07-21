
<script setup lang="ts">
import IconMenu from './icons/IconMenu.vue';
import { useUsers } from "@/composables/useUser";
import { useUserStore } from "@/store/user";

const { user, nameInitals } = useUsers()
const auth = useUserStore();

</script>

<template>
    <nav class="w-full p-7 bg-white border-[1px] border-gray-extra-light flex flex-row justify-between md:flex-row-reverse">
        <div class="block md:hidden cursor-pointer" @click="auth.setIsMenu(true)">
            <IconMenu/>
        </div>
        <div class="inline-flex items-center">
            <div class="w-8 h-8 flex items-center justify-center bg-[#EB6F25] rounded-full font-bold text-sm text-white">
                <span>{{ nameInitals }}</span>
            </div>
            <div class="ml-2 text-xs font-bold">
                {{ user?.nombre }}
            </div>
        </div>
    </nav>
</template>

<style scoped>

</style>