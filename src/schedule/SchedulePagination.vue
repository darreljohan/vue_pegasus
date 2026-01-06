<template>
    <base-card> 
        <base-pagination
            :page="page"
            :totalPages="totalPages"
            :selectPage="selectPage"
            :firstPage="firstPage"
            :lastPage="lastPage"
        ></base-pagination>
    </base-card>
</template>

<script setup>
import useScheduleStore from '../store/schedule/schedule-store'
import { storeToRefs } from 'pinia';

const scheduleStore = useScheduleStore();
let { page, totalPages }=storeToRefs(scheduleStore)

const selectPage = (page) =>{
    scheduleStore.page = page;
    scheduleStore.getScheduleRow();
}

const firstPage = ()=>selectPage(1);
const lastPage = ()=>selectPage(store.totalPages);

// const searchByName = (event, property)=>{
//     store[property] = event.target.value
//     store.page = 1;
//     store.refreshGrid();
// }
</script>

<style scoped>

</style>