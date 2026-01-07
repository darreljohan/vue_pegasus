<template>
  <base-card>
    <div class="filter-container">
      <h2>Filter By</h2>
      <base-text-input
        :label="'Train Name'"
        v-model="filter.trainName"
        :changeEvent="changes"
      ></base-text-input>
      <base-text-input
        :label="'Dept Station'"
        v-model="filter.deptStation"
        :changeEvent="changes"
      ></base-text-input>
      <base-date-input
        :label="'Dept. Time'"
        v-model="filter.deptTime"
        :changeEvent="changes"
      ></base-date-input>
      <base-dropdown-input
        :label="'Class'"
        v-model="filter.trainClass"
        :options="options"
        :changeEvent="changes"
      ></base-dropdown-input>
    </div>
  </base-card>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import { storeToRefs } from "pinia";
import useScheduleStore from "../../store/schedule/schedule-store";

let scheduleStore = useScheduleStore();

let { filter } = storeToRefs(scheduleStore);

let options = ref([]);

let changes = () => {
  scheduleStore.page = 1;
  scheduleStore.refreshGrid();
};

onBeforeMount(async () => {
  options.value = await scheduleStore.getTrainClassDropdown();
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
