<template>
    <base-title :title="'Passenger'"></base-title>
    <main>
        <base-button :isLink="true" , :link="'/passenger/form'">
            <i class="fas fa-plus"></i>
            <span>Insert New</span>
        </base-button>
        <passenger-filter></passenger-filter>
        <passenger-row 
            v-for="passenger of grid"
            :passenger="passenger"
        ></passenger-row>
        <passenger-pagination></passenger-pagination>
    </main>
    <teleport to="body">
        <router-view></router-view>
    </teleport>
</template>

<script setup>
import { onBeforeMount } from 'vue';
import PassengerRow from './PassengerRow.vue';
import PassengerFilter from './PassengerFilter.vue';
import PassengerPagination from './PassengerPagination.vue';
import usePassengerStore from '../../store/passenger/passenger-store';
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';

const passengerStore = usePassengerStore()
const { grid } = storeToRefs(passengerStore)
const route = useRoute()

debugger

onBeforeMount(async ()=>{
    await passengerStore.refreshGrid()

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