<template>
    <base-card class="base-card">
        <div class="left">
            <!-- <div class="row">
                <span class="label">Train</span>
                <span class="value">Cirebon Ekspres</span>
            </div>
            <div class="row">
                <span class="label">Class</span>
                <span class="value">Economy</span>
            </div>
            <div class="row">
                <span class="label">Passengers</span>
                <span class="value">5/500</span>
            </div>
            <div class="row">
                <span class="label">Cost</span>
                <span class="value">Rp80.000,00</span>
            </div> -->
            <slot name="left"></slot>
        </div>
        <div class="right">
            <!-- <div class="row">
                <span class="label">Dept. Station</span>
                <span class="value">Jakarta</span>
            </div>
            <div class="row">
                <span class="label">Dept. Time</span>
                <span class="value">Rabu, 8 Oktober 2025 - 11:00</span>
            </div>
            <div class="row">
                <span class="label">Arr. Station</span>
                <span class="value">Bandung</span>
            </div>
            <div class="row">
                <span class="label">Arr. Time</span>
                <span class="value">Rabu, 8 Oktober 2025 - 14:00</span>
            </div>
            <div class="button-container">
                <button type="button" class="base-button open-form" fdprocessedid="ho5832">
                    <i class="fas fa-edit"></i>
                    <span>Update</span>
                </button>
                <button type="button" class="base-button open-delete" fdprocessedid="74dujb">
                    <i class="fas fa-trash"></i>
                    <span>Remove</span>
                </button>
                <a href="/assignment/passengersOnBoard" class="base-button">
                    <i class="fas fa-users"></i>
                    <span>Passengers</span>
                </a>
            </div> -->
            <slot name="right"></slot>
        </div>
    </base-card>
</template>

<script setup>

</script>

<style scoped>

.base-card {
    display: flex;
    justify-content: flex-start;
}

div{
    flex-grow: 1;
}

:deep(.row) {
    margin-bottom: 10px;
    display: flex;
    align-items: flex-start;
}

:deep(.row > .label){
    color: #16a085;
    font-weight: bold;
    min-width: 110px;
    padding-right: 15px;
}

:deep(.row > .value){
    padding: 0 15px;
    min-width: 150px;
}
</style>