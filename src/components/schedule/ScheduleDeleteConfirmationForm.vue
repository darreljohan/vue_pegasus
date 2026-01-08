<template>
  <base-delete-dialog
    :title="'Delete Schedule'"
    :closeLink="'/schedule'"
    :deleteHandler="()=>{deleteHandler({id})}"
  >
    <p>
      Are you sure you want to delete this schedule? All this schedule's
      passengers will also be removed.
    </p>
  </base-delete-dialog>
</template>

<script setup>
import { useRouter } from "vue-router";
import useScheduleStore from "../../store/schedule/schedule-store";
import useDelete from "../../hooks/delete"
import { onBeforeMount } from "vue";

const scheduleStore = useScheduleStore();
const router = useRouter();
const props = defineProps(["id"]);

const {deleteHandler} = useDelete({
  store: scheduleStore,
  closeLink: "/schedule",
  router
})

onBeforeMount(async ()=>{
    await scheduleStore.findById(props.id);
})

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
