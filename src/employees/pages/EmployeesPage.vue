<script setup lang="ts">
import CardTable from "@/shared/components/CardTable.vue";
import CardTableLoading from "@/shared/components/CardTableLoading.vue";
import DashboardLayout from "@/shared/layout/DashboardLayout.vue";
import { useEmployees } from "@/composables/useEmployees";
import { useRoute } from "vue-router";
import { useEmployeesStore } from "@/store/employees";
import { watch } from "vue";

const {  mixEmployeesArray, loading, limit } = useEmployees();

const route = useRoute();

function load(val?: string) {
    const employeesStore = useEmployeesStore();
    const pageN = Number(route.params.page);
    const page = pageN > 0 ? pageN : 1
    if(val === "init" || pageN > 0) {
        employeesStore.setPage(page);
        mixEmployeesArray(page, limit.value);
    }
}

load("init")

watch(() => route.params.page, () => load());

</script>

<template>
    <DashboardLayout>
        <CardTableLoading v-if="loading" title="Empleados" />
        <CardTable v-else title="Empleados" description="Gestiona tus empleados"/>
    </DashboardLayout>
</template>

<style scoped></style>