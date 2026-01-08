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
import { storeToRefs } from "pinia";
import usePagination from "../../hooks/pagination";
import useBoardingStore from "../../store/boarding/boarding-store";

const boardingStore = useBoardingStore();
const { pagination } = storeToRefs(boardingStore);
const { selectPage, firstPage, lastPage } = usePagination(boardingStore);

</script>

<style scoped></style>