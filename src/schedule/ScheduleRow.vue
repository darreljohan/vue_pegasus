<template>
    <base-card-row>
        <template v-slot:left>
                <div class="row">
                <span class="label">Train</span>
                <span class="value">{{schedule.trainName}}</span>
            </div>
            <div class="row">
                <span class="label">Class</span>
                <span class="value">{{schedule.class}}</span>
            </div>
            <div class="row">
                <span class="label">Passengers</span>
                <span class="value">{{`${schedule.minPassengers}/${schedule.maxPassengers}`  }}</span>
            </div>
            <div class="row">
                <span class="label">Cost</span>
                <span class="value">{{ `${schedule.cost}` }}</span>
            </div>
        </template>
        <template v-slot:right>
            <div class="row">
                <span class="label">Dept. Station</span>
                <span class="value">{{ schedule.deptStation }}</span>
            </div>
            <div class="row">
                <span class="label">Dept. Time</span>
                <span class="value">{{ schedule.deptTime }}</span>
            </div>
            <div class="row">
                <span class="label">Arr. Station</span>
                <span class="value">{{ schedule.arrStation }}</span>
            </div>
            <div class="row">
                <span class="label">Arr. Time</span>
                <span class="value">{{ schedule.arrTime }}</span>
            </div>
            <div class="button-container">
                <base-button
                    :isLink="true"
                    :link="`/schedule/form/${schedule.id}`"
                >
                    <i class="fas fa-edit"></i>
                    <span>Update</span>
                </base-button>
                <base-button>
                    <i class="fas fa-trash"></i>
                    <span>Remove</span>
                </base-button>
                <base-button :isLink="true">
                    <i class="fas fa-users"></i>
                    <span>Passengers</span>
                </base-button>
            </div>
        </template>
    </base-card-row>
</template>

<script setup>
import { onBeforeMount } from 'vue';

const props = defineProps(['schedule'])

</script>

<style scoped>
.button-container {
    text-align: right;
}
</style>