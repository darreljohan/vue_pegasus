<template>
    <base-card>
        <div class="filter-container">
            <h2>Filter By</h2>
            <base-text-input
                :label="'Train Name'"
                v-model="filter.name"
                :changeEvent="changes"
            ></base-text-input>
        </div>
    </base-card>
</template>

<script setup>
import { storeToRefs } from "pinia";
import useTrainStore from "../../store/train/train-store";

const trainStore = useTrainStore();
const { filter } = storeToRefs(trainStore)

let changes = () => {
  trainStore.page = 1;
  trainStore.refreshGrid();
};

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