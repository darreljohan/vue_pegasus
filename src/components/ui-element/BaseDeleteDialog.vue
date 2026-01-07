<template>
    <base-dialog :title="title" :link="closeLink">
        <slot></slot>
    <div class="form-button-container">
      <base-button :event="deleteHandler">
        <i class="fas fa-trash"></i>
        <span>Remove</span>
      </base-button>
      <base-button :isLink="'true'" :link="closeLink">
        <i class="fas fa-times"></i>
        <span>Cancel</span>
      </base-button>
    </div>
  </base-dialog>
</template>

<script setup>

const props = defineProps(["title","closeLink", 'deleteHandler'])
</script>

<style scoped>
.form-button-container {
  text-align: right;
}
</style>