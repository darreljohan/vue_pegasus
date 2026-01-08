<template>
    <base-title :title="'Boarding for'" :detail="titleDetail"></base-title>
    <main>
        <boarding-filter></boarding-filter>
        <boarding-row
            v-for="schedule of grid"
            :schedule="schedule"
        ></boarding-row>
        <boarding-pagination></boarding-pagination>
    </main>
</template>

<script setup>
import useBoardingStore from "../../store/boarding/boarding-store";
import { onBeforeMount } from "vue";
import { storeToRefs } from "pinia";
import BoardingRow from "./BoardingRow.vue";
import BoardingFilter from "./BoardingFilter.vue";
import BoardingPagination from "./BoardingPagination.vue";

const boardingStore = useBoardingStore();
const { grid, pagination, filter, titleDetail } = storeToRefs(boardingStore);

const props = defineProps(['username'])

onBeforeMount(async () => {
    boardingStore.filter.username = props.username
    await boardingStore.refreshTitleDetail();
    await boardingStore.refreshGrid();
});

</script>

<style scoped>
main {
  width: 65%;
  margin: 20px auto;
}

main > * {
  margin-top: 15px;
}

@media screen and (max-width: 1300px) {
  main {
    width: 90%;
    margin: 10px auto;
  }
}

@media screen and (max-width: 1024px) {
  main {
    width: 100%;
  }
}   
</style>