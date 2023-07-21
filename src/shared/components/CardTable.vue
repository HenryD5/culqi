<script setup lang="ts">
import CardView from './CardView.vue';
import IconDownload from './icons/IconDownload.vue';
import IconPlus from './icons/IconPlus.vue';
import IconSearch from './icons/IconSearch.vue';
import IconEye from './icons/IconEye.vue';
import IconEdit from './icons/IconEdit.vue';
import IconDelete from './icons/IconDelete.vue';
import IconLeft from './icons/IconLeft.vue';
import IconRight from './icons/IconRight.vue';
import IconSelectDown from './icons/IconSelectDown.vue';
import { useEmployees } from "@/composables/useEmployees";

const props = defineProps({
    title: { type: String, required: true, default: 'Title' },
    description: { type: String }
});

const { page, limit, total, search, position, positions, listEmployees, totalPages, endPagination, initalCount, endCount, onChangeLimit, onChangePage, showAlert } = useEmployees();

</script>

<template>
    <CardView>
        <div class="flex flex-col sm:flex-row justify-between items-center gap-4 w-full">
            <div class=" w-full sm:w-auto">
                <h4 class="text-gray-900 text-2xl font-bold">{{ props.title }}</h4>
                <p class="mt-3 text-[#687588] text-sm font-medium" v-if="props.description">
                    {{ props.description }}
                </p>
            </div>
            <div class="w-full sm:w-auto flex flex-row gap-4 items-center">
                <button @click="showAlert('Feature - Download')"
                    class="w-full sm:w-auto text-center rounded-[10px] text-gray-900 px-4 py-4 text-base font-bold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 border-2 border-gray-900">
                    <IconDownload class="mr-2 inline" /> Descargar
                </button>
                <button @click="showAlert('Feature - Add')"
                    class="w-full sm:w-auto text-center rounded-[10px] text-white bg-gray-900 pl-4 pr-5 py-4 text-base font-bold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900  border-2 border-gray-900">
                    <IconPlus class="mr-2 inline" /> Nuevo
                </button>
            </div>
        </div>
        <div class="my-7 flex flex-col sm:flex-row gap-4 items-center w-full">
            <div class="w-full sm:w-3/5">
                <div
                    class="w-full flex flex-row-reverse border-0 rounded-[10px] shadow-sm ring-1 ring-inset ring-gray-extra-light focus-within:ring-2 focus-within:ring-inset  focus-within:ring-success py-4 px-6">
                    <span class="flex items-center select-none">
                        <IconSearch />
                    </span>
                    <input type="search" name="search" id="search" v-model="search"
                        class="block flex-1 border-0 bg-transparent text-gray-900 focus:ring-0 placeholder:text-gray-light  placeholder:font-normal text-sm"
                        placeholder="Buscar enpleado">
                </div>
            </div>
            <div class="w-full sm:w-2/5">
                <div class="relative w-full">
                    <select id="country" name="country" v-model="position"
                        class="block appearance-none border-0 w-full py-4 px-6 pr-10 rounded-[10px] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-extra-light placeholder:text-gray-light  placeholder:font-normal focus:ring-2 focus:ring-inset focus:ring-success text-sm font-medium">
                        <option class="text-sm font-medium" value="" disabled selected>Nombre de cargo</option>
                        <option value="">Todos</option>
                        <option v-for="(position, index) of positions" :key="index" :value="position">{{ position }}
                        </option>
                    </select>
                    <div class="pointer-events-none absolute pin-y pin-r flex items-center pl-2 pr-4 text-grey-darker">
                        <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        <div class="overflow-x-auto">
            <table class="min-w-full text-left text-xs">
                <thead class="p-6 font-bold text-gray-mediun">
                    <tr class="rounded-[10px] bg-fund">
                        <th scope="col" class=" px-6 py-4 rounded-l-[10px]">
                            Nombre
                        </th>
                        <th scope="col" class=" px-6 py-4">
                            Nombre cargo
                        </th>
                        <th scope="col" class=" px-6 py-4">
                            Departamento
                        </th>
                        <th scope="col" class=" px-6 py-4">
                            Oficina
                        </th>
                        <th scope="col" class=" px-6 py-4">
                            Cuenta
                        </th>
                        <th scope="col" class=" px-6 py-4 rounded-r-[10px] text-right">
                            Acciones
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <template v-if="listEmployees.length > 0">
                        <tr v-for="(employee, index) of listEmployees" :key="index"
                            class="border-b-[#F1F2F4] border-b-[1px] text-gray-900 font-normal">
                            <td class="whitespace-nowrap px-6 py-4">
                                <div class="font-medium">
                                    {{ employee.nombre }}
                                </div>
                                <p class="text-[10px] m-px text-[#A0AEC0]">{{ employee.correo }}</p>
                            </td>
                            <td class="whitespace-nowrap  px-6 py-4">
                                {{ employee.cargo }}
                            </td>
                            <td class="whitespace-nowrap  px-6 py-4">
                                {{ employee.departamento }}
                            </td>
                            <td class="whitespace-nowrap  px-6 py-4">
                                {{ employee.oficina }}
                            </td>
                            <td class="whitespace-nowrap  px-6 py-4">
                                {{ employee.estadoCuenta }}
                            </td>
                            <td class="whitespace-nowrap  px-6 py-4 text-right">
                                <button @click="showAlert('Feature - Show')" class="rounded-lg p-2 bg-[#27A376]">
                                    <IconEye />
                                </button>
                                <button @click="showAlert('Feature - Edit')" class="rounded-lg p-2 bg-[#2F78EE] mx-3">
                                    <IconEdit />
                                </button>
                                <button @click="showAlert('Feature - Delete')" class="rounded-lg p-2 bg-[#E03137]">
                                    <IconDelete />
                                </button>
                            </td>
                        </tr>
                    </template>
                    <template v-else>
                        <tr class="border-b-[#F1F2F4] border-b-[1px] text-gray-900">
                            <td colspan="5" class="px-6 py-4 font-medium text-center">NO HAY DATOS</td>
                        </tr>
                    </template>
                </tbody>
            </table>
        </div>
        <div class="mt-8 mb-5 flex flex-col sm:flex-row w-full items-center justify-between gap-4" v-if="listEmployees.length > 4">
            <div class="w-full sm:w-auto text-center sm:text-left">
                <nav class="isolate inline-flex" aria-label="Pagination">
                    <a href="#" @click="onChangePage(page - 1)"
                        class="relative inline-flex items-center rounded-lg px-2 py-2 ring-1 ring-inset ring-[#F1F2F4] hover:bg-[#F8F8F8]focus:z-20 focus:outline-offset-0 mr-4"
                        :class="page === 1 ? 'opacity-50 cursor-not-allowed' : ''">
                        <span class="sr-only">Previous</span>
                        <IconLeft />
                    </a>
                    <a href="#" aria-current="page" v-for="item in endPagination" :key="item" @click="onChangePage(item)"
                        class="relative z-10 inline-flex items-center rounded-lg px-4 py-2 text-sm font-semibold text-gray-900 focus:z-20 focus:outline-offset-0 focus-visible:outline-[#F8F8F8] hover:bg-[#F8F8F8] mx-px"
                        :class="item === page ? 'bg-[#F8F8F8]' : ''">
                        {{ item }}
                    </a>
                    <template v-if="page <= totalPages && totalPages > 5">
                        <span
                            class="relative z-10 inline-flex items-center rounded-lg px-4 py-2 text-sm font-semibold text-gray-900 focus:z-20 focus:outline-offset-0 mx-px">...</span>
                        <a href="#" @click="onChangePage(totalPages)"
                            class="relative z-10 inline-flex items-center rounded-lg px-4 py-2 text-sm font-semibold text-gray-900 focus:z-20 focus:outline-offset-0 focus-visible:outline-[#F8F8F8] hover:bg-[#F8F8F8] mx-px">{{
                                totalPages }}</a>
                    </template>
                    <a href="#" @click="onChangePage(page + 1)"
                        class="relative inline-flex items-center rounded-lg px-2 py-2 ring-1 ring-inset ring-[#F1F2F4] hover:bg-[#F8F8F8] focus:z-20 focus:outline-offset-0 ml-4"
                        :class="page === totalPages ? 'opacity-50 cursor-not-allowed' : ''">
                        <span class="sr-only">Next</span>
                        <IconRight />
                    </a>
                </nav>
            </div>
            <div class="w-full sm:max-w-[350px] flex flex-row items-center">
                <div class="w-3/5 text-xs text-[#687588] font-medium">
                    Mostrando {{ initalCount }} a {{ page === totalPages ? total : endCount }} de {{ total }} registros
                </div>
                <div class="w-2/5">
                    <div class="relative w-full">
                        <select id="country" name="country" v-model="limit" @change="onChangeLimit()"
                            class="block appearance-none border-0 w-full py-3 px-4 pr-10 rounded-[10px] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-extra-light placeholder:text-gray-light  placeholder:font-normal focus:ring-2 focus:ring-inset focus:ring-success text-xs font-medium">
                            <option class="text-sm font-medium" value="5">Mostrar 5</option>
                            <option class="text-sm font-medium" value="10">Mostrar 10</option>
                            <option class="text-sm font-medium" value="20">Mostrar 20</option>
                            <option class="text-sm font-medium" value="50">Mostrar 50</option>
                        </select>
                        <div class="pointer-events-none absolute pin-y pin-r flex items-center pl-2 pr-3 text-grey-darker">
                            <IconSelectDown />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </CardView>
</template>

<style scoped></style>