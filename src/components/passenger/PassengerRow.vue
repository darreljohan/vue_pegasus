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
            <div class="button-container">
                <base-button
                    :isLink="true"
                    :link="`/passenger/form/${passenger.username}`"
                >
                    <i class="fas fa-edit"></i>
                    <span>Update</span>
                </base-button>
                <base-button
                    :isLink="true"
                    :link="`/passenger/delete/${passenger.username}`"
                >
                    <i class="fas fa-trash"></i>
                    <span>Remove</span>
                </base-button>
                <base-button
                    :isLink="true"
                    :link="`/passenger`"
                >
                    <i class="fas fa-train"></i>
                    <span>Board</span>
                </base-button>
            </div>
        </template>
   </base-card-row>
</template>

<script setup>
const props = defineProps(['passenger'])
</script>

<style scoped>
.button-container {
  text-align: right;
}
</style>