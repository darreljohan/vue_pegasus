<template>
  <base-card>
    <div class="filter-container">
      <h2>Filter By</h2>
      <base-text-input
        :label="'Train Name'"
        v-model="filter.trainName"
        :changeEvent="onChange"
      ></base-text-input>
      <base-text-input
        :label="'Dept Station'"
        v-model="filter.deptStation"
        :changeEvent="onChange"
      ></base-text-input>
      <base-date-input
        :label="'Dept. Time'"
        v-model="filter.deptTime"
        :changeEvent="onChange"
      ></base-date-input>
      <base-dropdown-input
        :label="'Class'"
        v-model="filter.trainClass"
        :options="options"
        :changeEvent="onChange"
      ></base-dropdown-input>
    </div>
  </base-card>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import { storeToRefs } from "pinia";
import useBoardingStore from "../../store/boarding/boarding-store";

const boardingStore = useBoardingStore();

const { filter } = storeToRefs(boardingStore);

let options = ref([]);

let onChange = () => {
  boardingStore.page = 1;
  boardingStore.refreshGrid();
};

onBeforeMount(async () => {
  options.value = await boardingStore.getTrainClassDropdown();
});

</script>

<style scoped>
:deep(.base-card) {
  margin-top: 15px;
}

.filter-container > h2 {
  font-size: 14px;
  font-style: italic;
  color: #006266;
  margin: 10px 0 20px 0;
}
</style>
