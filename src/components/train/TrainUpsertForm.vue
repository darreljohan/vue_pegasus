<template>
    <base-dialog :title="'Train Form'" :link="'/train'">
        <base-text-input
            :label="'Code*'"
            v-model="input.code"
            :validationMessages="validation?.code"
        ></base-text-input>
        <base-text-input
            :label="'Name*'"
            v-model="input.name"
            :validationMessages="validation?.name"
        ></base-text-input>
        <base-text-input
            :label="'Max Passenger*'"
            v-model="input.maxPassengers"
            :validationMessages="validation?.maxPassengers"
        >
        </base-text-input>
        <base-textarea-input
            :label="'Description*'"
            v-model="input.description"
            :validationMessages="validation?.description"
        >
        </base-textarea-input>
        <base-button-container>
            <base-button @click="submit">
                <i class="fas fa-save"></i>
                <span>Save</span>
            </base-button>
            <base-button :isLink="true" :link="'/train'">
                <i class="fas fa-times"></i>
                <span>Cancel</span>
            </base-button>
        </base-button-container>
    </base-dialog>
</template>

<script setup>
import useTrainStore from '../../store/train/train-store';
import useUpsert from "../../hooks/upsert";
import { onBeforeMount } from 'vue';

const trainStore = useTrainStore()

const props = defineProps(["code"]);

const { input, validation, submit } = useUpsert({
  store: trainStore,
  idKey: 'code',
  closeLink: "/train",
});

input.value = {
    code: null,
    name: null,
    maxPassengers: null,
    description: null

}

onBeforeMount(async ()=>{
    if (props.code !== "") {
        input.value = await trainStore.findById(props.code);
    }
})

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