<template>
  <base-delete-dialog
    :title="'Delete Schedule'"
    :closeLink="'/schedule'"
    :deleteHandler="deleteHandler"
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

const scheduleStore = useScheduleStore();
const router = useRouter();
const props = defineProps(["id"]);

const {deleteHandler} = useDelete({
  store: scheduleStore,
  id: props.id,
  closeLink: "/schedule",
  router
})

// const deleteEvent = async () => {
//   await scheduleStore.deleteById(props.id);
//   await scheduleStore.refreshGrid();
//   router.push("/schedule");
// };
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
