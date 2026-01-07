<template>
    <base-title :title="'Schedules'"></base-title>
    <main>
        <base-button :isLink="true" , :link="'/schedule/form'">
            <i class="fas fa-plus"></i>
            <span>Insert New</span>
        </base-button>
        <passenger-filter></passenger-filter>
        <passenger-row 
            v-for="passenger of grid"
            :passenger="passenger"
            :id="passenger.id"
        ></passenger-row>
        <passenger-pagination></passenger-pagination>
    </main>
</template>

<script setup>
import { onBeforeMount } from 'vue';
import PassengerRow from './PassengerRow.vue';
import PassengerFilter from './PassengerFilter.vue';
import PassengerPagination from './PassengerPagination.vue';
import usePassengerStore from '../../store/passenger/passenger-store';
import { storeToRefs } from 'pinia';

const passengerStore = usePassengerStore()
const { grid } = storeToRefs(passengerStore)

onBeforeMount(()=>{
    passengerStore.refreshGrid()
})
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