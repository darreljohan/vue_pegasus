<template>
  <base-dialog>
    <base-dropdown-input
      :label="'Train *'"
      :options="trainOption"
      v-model="input.train"
    ></base-dropdown-input>
    <base-dropdown-input
      :label="'Class *'"
      :options="trainClassOption"
      v-model="input.trainClass"
    ></base-dropdown-input>
    <base-dropdown-input
      :label="'Dept. Station *'"
      :options="trainStationOption"
      v-model="input.DepartureStation"
    ></base-dropdown-input>
    <base-dropdown-input
      :label="'Arr. Station *'"
      :options="trainStationOption"
      v-Model="input.ArrivalStation"
    ></base-dropdown-input>
    <base-date-input
      :label="'Dept. Time *'"
      v-model="input.date"
    ></base-date-input>
    <base-text-input :label="'Cost'" v-model="input.cost"></base-text-input>
    <div class="form-button-container">
      <base-button @click="submit">
        <i class="fas fa-save"></i>
        <span>Save</span>
      </base-button>
      <base-button :isLink="true" :link="'/schedule'">
        <i class="fas fa-times"></i>
        <span>Cancel</span>
      </base-button>
    </div>
  </base-dialog>
</template>

<script setup>
import { onBeforeMount, ref } from 'vue';
import useScheduleStore from '../store/schedule/schedule-store'
import useTrainStore from '../store/train/train-store' 
import useTrainStationStore from '../store/trainStation/train-station'

const scheduleStore = useScheduleStore();
const trainStore = useTrainStore()
const trainStationStore = useTrainStationStore()

const trainClassOption = ref([])
const trainOption = ref([])
const trainStationOption = ref([])

const input = ref({})

let submit = ()=>{
    console.log(input.value)
    debugger

}

onBeforeMount(async ()=>{
    trainOption.value = await trainStore.getTrainDropdown()
    trainClassOption.value = await scheduleStore.getTrainClassDropdown()
    trainStationOption.value = await trainStationStore.getTrainStationDropdown()
})
</script>

<style scoped>
.form-button-container {
  text-align: right;
}
</style>
