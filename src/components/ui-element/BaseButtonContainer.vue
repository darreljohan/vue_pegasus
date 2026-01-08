<template>
    <div class="button-container">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.button-container {
  text-align: right;
}

.button-container > *{
    margin-right: 3px; 
}
</style>