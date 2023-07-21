
<script setup lang="ts">
import SideBar from '@/shared/components/SideBar.vue';
import NavBar from '../components/NavBar.vue';

import { useToken } from "@/composables/useToken";
import { useUserStore } from "@/store/user";

const { getAuthData } = useToken();

const auth = useUserStore();

auth.setIsMenu(false)

if (auth.user === undefined) {
    const data = getAuthData();
    if (Object.keys(data).length > 0) {
        //const dataUser = JSON.parse(data);
        auth.setUser(data);
    }
}

</script>

<template>
    <div class="flex flex-col md:flex-row bg-fund w-full h-screen">
        <aside
            class="w-full md:w-70 hidden md:block bg-white p-8 border-[1px] border-gray-extra-light h-screen min-h-screen">
            <SideBar />
        </aside>
        <div class="w-full h-full md:hidden block absolute bg-menu-mobile z-40" v-if="auth.isMenu">
            <aside class="w-70 bg-white p-8 border-[1px] border-gray-extra-light h-screen min-h-screen z-60 relative">
                <div class="font-bold absolute top-4 right-6 cursor-pointer" @click="auth.setIsMenu(false)">X</div>
                <SideBar />
            </aside>
        </div>
        <main class="w-full overflow-y-auto">
            <NavBar />
            <section class="p-4 sm:p-8 mb-6">
                <slot />
            </section>
        </main>
    </div>
</template>

<style scoped></style>