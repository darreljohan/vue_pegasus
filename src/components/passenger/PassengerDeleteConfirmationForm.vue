<template>
  <base-delete-dialog
    :title="'Delete Confirmation'"
    :closeLink="'/passenger'"
    :deleteHandler="()=>{deleteHandler({username})}"
  >
    <p>
        Are you sure you want to delete this passenger? All this passenger's schedules will also be removed.
    </p>
  </base-delete-dialog>
</template>

<script setup>
import { useRouter } from "vue-router";
import usePassengerStore from "../../store/passenger/passenger-store";
import useDelete from "../../hooks/delete"


const passengerStore = usePassengerStore();
const router = useRouter();
const props = defineProps(["username"]);

const {deleteHandler} = useDelete({
  store: passengerStore,
  closeLink: "/passenger",
  router
})

</script>

<style  scoped>
</style>