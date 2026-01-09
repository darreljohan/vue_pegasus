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
                <span class="value">{{ formatDateID(schedule.arrTime) }}</span>
            </div>
            <div class="row">
                <span class="label">Arr. Station</span>
                <span class="value">{{ schedule.arrStation }}</span>
            </div>
            <div class="row">
                <span class="label">Arr. Time</span>
                <span class="value">{{ formatDateID(schedule.arrTime) }}</span>
            </div>
            <base-button-container>
                <base-button
                    :isLink="true"
                    :link="`/schedule/form/${schedule.id}`"
                >
                    <i class="fas fa-edit"></i>
                    <span>Update</span>
                </base-button>
                <base-button
                    :isLink="true"
                    :link="`/schedule/delete/${schedule.id}`"
                >
                    <i class="fas fa-trash"></i>
                    <span>Remove</span>
                </base-button>
                <base-button 
                    :isLink="true"
                    :link="`/passengerOnBoard/${schedule.id}`"
                >
                    <i class="fas fa-users"></i>
                    <span>Passengers</span>
                </base-button>
            </base-button-container>
        </template>
    </base-card-row>
</template>

<script setup>
import { onBeforeMount } from 'vue';

const props = defineProps(['schedule'])

function formatDateID(date) {
  const parts = new Intl.DateTimeFormat("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(date);

  const get = type => parts.find(p => p.type === type)?.value;

  return `${get("weekday")}, ${get("day")} ${get("month")} ${get("year")} - ${get("hour")}:${get("minute")}`;
}

</script>

<style scoped>
.button-container {
    text-align: right;
}
</style>