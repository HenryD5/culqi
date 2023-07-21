<script setup lang="ts">
import IconFailedAlert from '@/shared/components/icons/IconFailedAlert.vue';

const props = defineProps(["type", "text"]);
</script>

<template>
    <div :class="props.type === 'success' ? 'text-success' : 'text-failed'"
        class="text-xs font-normal inline-flex items-center" role="alert">
        <IconFailedAlert v-if="type === 'failed'" class="mr-1" />
        <span> {{ text }}</span>
    </div>
</template>

<style scoped></style>