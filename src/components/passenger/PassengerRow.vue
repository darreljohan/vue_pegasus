<template>
   <base-card-row>
        <template v-slot:left>
                <div class="row">
                <span class="label">Username</span>
                <span class="value">{{ passenger.username }}</span>
            </div>
            <div class="row">
                <span class="label">Full Name</span>
                <span class="value">{{`${passenger.firstName} ${passenger.lastName}`}}</span>
            </div>
            <div class="row">
                <span class="label">Gender</span>
                <span class="value">{{ passenger.gender=='M'?'Male':passenger.gender=='F'?'Female':"" }}</span>
            </div>
        </template>
        <template v-slot:right>
            <div class="row">
                <span class="label">Birth Date</span>
                <span class="value">{{ passenger.birthDate }}</span>
            </div>
            <div class="row">
                <span class="label">ID Number</span>
                <span class="value">{{ passenger.idNumber }}</span>
            </div>
            <div class="row">
                <span class="label">Address</span>
                <span class="value">{{ passenger.address }}</span>
            </div>
        </template>
   </base-card-row>
</template>

<script setup>
const props = defineProps(['passenger', 'id'])
</script>

<style scoped>

</style>