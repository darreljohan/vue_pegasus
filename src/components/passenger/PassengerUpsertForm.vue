<template>
    <base-dialog :title="'Passenger Form'" :link="'/passenger'">
        <base-text-input
            :label="'Username'"
            v-model="input.username"
            :validationMessages="validation?.username"
            :isDisabled="username?true:false"
        ></base-text-input>
        <base-text-input
            :label="'First Name'"
            v-model="input.firstName"
            :validationMessages="validation?.firstName"
        ></base-text-input>
        <base-text-input
            :label="'Last Name'"
            v-model="input.lastName"
            :validationMessages="validation?.lastName"
        ></base-text-input>
        <base-dropdown-input
            :label="'Gender'"
            :options="genderOptions"
            v-model="input.gender"
            :validationMessages="validation?.gender"
        ></base-dropdown-input>
         <base-date-input
            :label="'Birth Date'"
            v-model="input.birthDate"
            :validationMessages="validation?.birthDate"
        ></base-date-input>
        <base-text-input
            :label="'Id Number'"
            v-model="input.idNumber"
            :validationMessages="validation?.idNumber"
        ></base-text-input>
        <base-textarea-input
            :label="'Address'"
            v-model="input.address"
            :validationMessages="validation?.address"
        >
        </base-textarea-input>
        <base-button-container>
            <base-button @click="submit">
                <i class="fas fa-save"></i>
                <span>Save</span>
            </base-button>
            <base-button :isLink="true" :link="'/passenger'">
                <i class="fas fa-times"></i>
                <span>Cancel</span>
            </base-button>
        </base-button-container>
    </base-dialog>
</template>

<script setup>
import { onBeforeMount, ref } from 'vue';
import useUpsert from '../../hooks/upsert'
import usePassengerStore from '../../store/passenger/passenger-store';

const passengerStore = usePassengerStore()
const props = defineProps(['username'])

let genderOptions = [
    {
        value: 'M',
        text: 'Male'
    },
    {
        value: 'F',
        text: 'Female'
    }
]

const {input, validation, submit} = useUpsert({store: passengerStore, idKey: 'username', closeLink:'/passenger'})

onBeforeMount(async ()=>{
    if (props.username !== '') {
        input.value = await passengerStore.findById(props.username);
    }
})

</script>

<style scoped>
</style>