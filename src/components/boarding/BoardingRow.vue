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
            <base-button-container>
                <base-button
                    :event="async ()=>{ await onAssign()}"
                >
                    <span>Assign</span>
                </base-button>
            </base-button-container>
        </template>
    </base-card-row>
</template>
<script setup>
import { storeToRefs } from "pinia";
import useBoardingStore from "../../store/boarding/boarding-store";

const boardingStore = useBoardingStore()
const {filter} = storeToRefs(boardingStore)
const props = defineProps(['schedule'])

const onAssign = async ()=>{
    await boardingStore.assign({scheduleId : props.schedule.id, username: filter.value.username})
    await boardingStore.refreshGrid()
}

</script>

<style scoped>
.button-container {
    text-align: right;
}
</style>