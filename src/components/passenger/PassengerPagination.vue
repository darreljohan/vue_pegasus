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
import usePassengerStore from "../../store/passenger/passenger-store";
import { storeToRefs } from "pinia";
import usePagination from "../../hooks/pagination";

const passangerStore = usePassengerStore();
const { pagination } = storeToRefs(passangerStore);
const { selectPage, firstPage, lastPage } = usePagination(passangerStore);

</script>

<style scoped></style>