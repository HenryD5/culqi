<script setup lang="ts">
import CardView from './CardView.vue';

const props = defineProps({
 title: { type: String, required: true, default: 'Title' }
});

</script>

<template>
    <CardView>
        <div class="flex flex-row justify-between items-center">
            <div class="text-gray-900 text-2xl font-bold">
                {{ props.title }}
            </div>
            <div class="animate-pulse">
                <div class="bg-[#F8F8F8] h-9 w-28 rounded-full"></div>
            </div>
        </div>
        <div class="my-7 flex flex-row animate-pulse gap-4 items-center">
            <div class="h-9 w-full rounded-full bg-[#F8F8F8]"></div>
            <div class="h-9 w-full rounded-full bg-[#F8F8F8]"></div>
            <div class="h-9 w-full rounded-full bg-[#F8F8F8]"></div>
        </div>
        <div class="overflow-hidden animate-pulse">
            <table class="min-w-full text-center text-sm font-light">
                <thead class="p-6 rounded-[10px]">
                    <tr class="rounded-[10px] bg-fund">
                        <th scope="col" class=" px-6 py-4 rounded-l-[10px]">
                            <div class="flex flex-row gap-4">
                                <div class="h-5 w-6 rounded-full bg-[#F1F2F4]"></div>
                                <div class="w-full h-5 rounded-full bg-[#F1F2F4]"></div>
                            </div>
                        </th>
                        <th scope="col" class=" px-6 py-4">
                            <div class="flex flex-row gap-4">
                                <div class="w-full h-5 rounded-full bg-[#F1F2F4]"></div>
                                <div class="h-5 w-6 rounded-full bg-[#F1F2F4]"></div>
                            </div>
                        </th>
                        <th scope="col" class=" px-6 py-4">
                            <div class="flex flex-row gap-4">
                                <div class="w-full h-5 rounded-full bg-[#F1F2F4]"></div>
                                <div class="h-5 w-6 rounded-full bg-[#F1F2F4]"></div>
                            </div>
                        </th>
                        <th scope="col" class=" px-6 py-4 rounded-r-[10px]">
                            <div class="flex flex-row gap-4">
                                <div class="w-full h-5 rounded-full bg-[#F1F2F4]"></div>
                                <div class="h-5 w-6 rounded-full bg-[#F1F2F4]"></div>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="i of 8" :key="i" class="border-b-[#F1F2F4] border-b-[1px]">
                        <td class="whitespace-nowrap px-6 py-4">
                            <div class="flex flex-row gap-4 my-3">
                                <div class="h-5 w-6 rounded-full bg-[#F1F2F4]"></div>
                                <div class="w-full h-5 rounded-full bg-[#F1F2F4]"></div>
                            </div>
                        </td>
                        <td class="whitespace-nowrap  px-6 py-4">
                            <div class="w-full h-5 rounded-full bg-[#F1F2F4] my-3"></div>
                        </td>
                        <td class="whitespace-nowrap  px-6 py-4">
                            <div class="w-full h-5 rounded-full bg-[#F1F2F4] my-3"></div>
                        </td>
                        <td class="whitespace-nowrap  px-6 py-4">
                            <div class="w-full h-5 rounded-full bg-[#F1F2F4] my-3"></div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </CardView>
</template>

<style scoped></style>