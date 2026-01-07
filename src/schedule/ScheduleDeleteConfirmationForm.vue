<template>
    <base-dialog
        :title="'Delete Confirmation'"
        :link="'/schedule'"
    >
        <p>
            Are you sure you want to delete this schedule?
            All this schedule's passengers will also be removed.
        </p>
        <div class="form-button-container">
            <base-button
                :event="deleteEvent"
            >
                <i class="fas fa-trash"></i>
                <span>Remove</span>
            </base-button>
            <base-button 
                :isLink="'true'"
                :link="'/schedule'"
            >
                <i class="fas fa-times"></i>
                <span>Cancel</span>
            </base-button>
        </div>
    </base-dialog>
</template>

<script setup>
import { useRouter } from 'vue-router';
import useScheduleStore from '../store/schedule/schedule-store'

const scheduleStore = useScheduleStore();
const router = useRouter();
const props = defineProps(['id']);

const deleteEvent = async ()=>{
    await scheduleStore.deleteScheduleById(props.id)
    await scheduleStore.getScheduleRow()
    router.push('/schedule')
}

</script>

<style scoped>
.base-dialog p {
    color: #006266;
    font-size: 16px;
}
.form-button-container {
    text-align: right;
}
</style>