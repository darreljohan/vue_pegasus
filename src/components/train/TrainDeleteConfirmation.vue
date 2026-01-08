<template>
  <base-delete-dialog
    :title="'Delete Train'"
    :closeLink="'/train'"
    :deleteHandler="deleteHandler"
  >
    <p>
      Are you sure you want to delete this train? You can't delete this train while there is one or more schedule is exist for this train.
    </p>
  </base-delete-dialog>
</template>

<script setup>
import { useRouter } from "vue-router";
import useTrainStore from "../../store/train/train-store"
import useDelete from "../../hooks/delete"

const trainStore = useTrainStore();
const router = useRouter();
const props = defineProps(["code"]);

const {deleteHandler} = useDelete({
  store: trainStore,
  id: props.code,
  closeLink: "/train",
  router
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
