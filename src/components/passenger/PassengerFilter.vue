<template>
    <base-card>
        <div class="filter-container">
            <h2>Filter By</h2>
            <base-text-input
                :label="'First Name'"
                v-model="filter.firstName"
                :changeEvent="changes"
            ></base-text-input> 
            <base-text-input
                :label="'Last Name'"
                v-model="filter.lastName"
                :changeEvent="changes"
            ></base-text-input>
        </div>
    </base-card>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import usePassengerStore from '../../store/passenger/passenger-store';

const passengerStore = usePassengerStore();
const {filter} = storeToRefs(passengerStore)

const changes = async () => {
    debugger
  passengerStore.page = 1;
    await passengerStore.refreshGrid();
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