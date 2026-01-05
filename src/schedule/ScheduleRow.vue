<template>
    <base-card-row>
    <template v-slot:left>
         <div class="row">
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
        </div>
    </template>
    <template v-slot:right>
        <div class="row">
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
            <base-button>
                <i class="fas fa-edit"></i>
                <span>Update</span>
            </base-button>
            <base-button>
                <i class="fas fa-trash"></i>
                <span>Remove</span>
            </base-button>
            <base-button :isLink="true">
                <i class="fas fa-users"></i>
                <span>Passengers</span>
            </base-button>
        </div>
    </template>
    </base-card-row>
</template>

<script setup>

</script>

<style scoped>
.button-container {
    text-align: right;
}
</style>