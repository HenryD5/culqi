<script setup lang="ts">
import FooterLogin from './FooterLogin.vue';
import FormLogin from './FormLogin.vue';
import HeaderLogin from './HeaderLogin.vue';

</script>

<template>
    <div class="h-screen w-full flex flex-col justify-between items-center">
        <HeaderLogin />
        <FormLogin />
        <FooterLogin />
    </div>
</template>

<style scoped></style>