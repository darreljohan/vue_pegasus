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
import { onBeforeMount, ref } from "vue";
import useScheduleStore from "../../store/schedule/schedule-store";
import useTrainStore from "../../store/train/train-store";
import useTrainStationStore from "../../store/trainStation/train-station";
import { useRouter } from "vue-router";

const scheduleStore = useScheduleStore();
const trainStore = useTrainStore();
const trainStationStore = useTrainStationStore();

const props = defineProps(["id"]);

const trainClassOption = ref([]);
const trainOption = ref([]);
const trainStationOption = ref([]);

const input = ref({});
const validation = ref({});
const router = useRouter()

let submit = async () => {
  console.log(input.value);
  validation.value = {};
  if (!input.value.departureTime) {
    validation.value.departureTime ??= [];
    validation.value.departureTime.push("Please Input Departure Time");
  } else {
    input.value.departureTime = new Date(input.value.departureTime)
      .toISOString()
      .slice(0, 16);
  }

  let response = await scheduleStore.upsertSchedule({
    payload: input.value,
    keyName: props.id,
  });
  if (response.status == 422) {
    for (let validate of response.data) {
      if (validate.field == null) {
        validation.value.otherMessages ??= [];
        validation.value.otherMessages.push(validate.defaultMessage);
      }
      validation.value[validate.field] ??= [];
      validation.value[validate.field].push(validate.defaultMessage);
    }
  }

  scheduleStore.refreshGrid();
  router.push('/schedule')
};

onBeforeMount(async () => {
  if (props.id == null || props.id !== "") {
    input.value = await scheduleStore.findScheduleById(props.id);
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
