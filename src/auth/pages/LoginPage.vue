<script setup lang="ts">
import ContentLogin from '../components/ContentLogin.vue';
import MainLogin from '../components/MainLogin.vue';
import AuthLayout from '../layout/AuthLayout.vue';

</script>

<template>
  <AuthLayout>
    <template #content>
      <ContentLogin />
    </template>
    <template #form>
      <MainLogin />
    </template>
  </AuthLayout>
</template>

<style scoped></style>