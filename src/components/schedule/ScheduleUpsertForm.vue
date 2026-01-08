<template>
  <base-dialog :title="'Schedule Form'" :link="'/schedule'">
    <base-dropdown-input
      :label="'Train *'"
      :options="trainOption"
      v-model="input.trainCode"
      :validationMessages="validation?.trainCode"
    ></base-dropdown-input>
    <base-dropdown-input
      :label="'Class *'"
      :options="trainClassOption"
      v-model="input.trainClassCode"
      :validationMessages="validation?.trainClassCode"
    ></base-dropdown-input>
    <base-dropdown-input
      :label="'Dept. Station *'"
      :options="trainStationOption"
      v-model="input.departureStationId"
      :validationMessages="validation?.departureStationId"
    ></base-dropdown-input>
    <base-dropdown-input
      :label="'Arr. Station *'"
      :options="trainStationOption"
      v-model="input.arrivalStationId"
      :validationMessages="validation?.arrivalStationId"
    ></base-dropdown-input>
    <base-date-input
      :label="'Dept. Time *'"
      v-model="input.departureTime"
      :validationMessages="validation?.departureTime"
    ></base-date-input>
    <base-text-input
      :label="'Duration'"
      v-model="input.duration"
      :validationMessages="validation?.duration"
    ></base-text-input>
    <base-text-input
      :label="'Cost'"
      v-model="input.cost"
      :validationMessages="validation?.cost"
    ></base-text-input>
    <base-validation-message
      v-for="message of validation.otherMessages"
      :message="message"
    ></base-validation-message>
    <base-button-container>
      <base-button @click="submit">
        <i class="fas fa-save"></i>
        <span>Save</span>
      </base-button>
      <base-button :isLink="true" :link="'/schedule'">
        <i class="fas fa-times"></i>
        <span>Cancel</span>
      </base-button>
    </base-button-container>
  </base-dialog>
</template>

<script setup>
import { computed, onBeforeMount, ref } from "vue";
import useScheduleStore from "../../store/schedule/schedule-store";
import useTrainStore from "../../store/train/train-store";
import useTrainStationStore from "../../store/trainStation/train-station";
import useUpsert from "../../hooks/upsert";

const scheduleStore = useScheduleStore();
const trainStore = useTrainStore();
const trainStationStore = useTrainStationStore();

const props = defineProps(["id"]);

const trainClassOption = ref([]);
const trainOption = ref([]);
const trainStationOption = ref([]);

const { input, validation, submit } = useUpsert({
  store: scheduleStore,
  idKey: 'id',
  closeLink: "/schedule",
});


onBeforeMount(async () => {
  if (props.id !== "") {
    let data = await scheduleStore.findById(props.id);
    data.departureTime = data.departureTime.split('T')[0]
    input.value = data
  }
  trainOption.value = await trainStore.getTrainDropdown();
  trainClassOption.value = await scheduleStore.getTrainClassDropdown();
  trainStationOption.value = await trainStationStore.getTrainStationDropdown();
});
</script>

<style scoped>
.form-button-container {
  text-align: right;
}

.validation-message {
  background-color: #e74c3c;
  color: white;
  margin: 5px 0;
  padding: 6px;
  border-radius: 4px;
  font-size: 12px;
}
</style>
