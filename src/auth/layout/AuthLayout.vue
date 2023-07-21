<script setup lang="ts">

</script>

<template>
  <div class="flex flex-col md:flex-row">
    <div class="w-full md:w-1/2 hidden md:block">
      <slot name="content" />
    </div>
    <div class="w-full md:w-1/2">
      <slot name="form" />
    </div>
  </div>
</template>

<style scoped></style>