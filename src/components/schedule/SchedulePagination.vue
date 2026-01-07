<template>
  <base-card>
    <base-pagination
      :page="pagination.page"
      :totalPages="pagination.totalPages"
      :selectPage="selectPage"
      :firstPage="firstPage"
      :lastPage="lastPage"
    ></base-pagination>
  </base-card>
</template>

<script setup>
import useScheduleStore from "../../store/schedule/schedule-store";
import { storeToRefs } from "pinia";
import usePagination from "../../hooks/pagination";

const scheduleStore = useScheduleStore();
const { pagination } = storeToRefs(scheduleStore);
const { selectPage, firstPage, lastPage } = usePagination(scheduleStore);

</script>

<style scoped></style>
