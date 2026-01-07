<template>
    <div class="row">
        <div class="label">{{ label  }}</div>
        <div class="value">
            <textarea class="base-textarea" v-model="model">
            </textarea>
             <base-validation-message 
                v-for="message of validationMessages"
                :message="message"
            ></base-validation-message>
        </div>
    </div>
</template>

<script setup>
let model = defineModel()
let props = defineProps([
    'label',
    'options',
    'changeEvent',
    'validationMessages'
])

</script>

<style scoped>

.row {
    margin-bottom: 10px;
    display: flex;
    align-items: flex-start;
}

.row > .label {
    color: #16a085;
    font-weight: bold;
    min-width: 110px;
    padding-right: 15px;
}

.base-textarea {
    resize: none;
    width: 250px;
    height: 70px;
    border: solid #95a5a6 1px;
    border-radius: 4px;
}
</style>