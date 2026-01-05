<template>
    <base-title :title="'Schedules'"></base-title>
    <main>
        <schedule-filter></schedule-filter>
        <schedule-row></schedule-row>
    </main>
</template>

<script setup>
    import ScheduleFilter from './ScheduleFilter.vue';
    import ScheduleRow from './ScheduleRow.vue';
</script>

<style scoped>
main {
    width: 65%;
    margin: 20px auto;
}

main > *{
    margin-top: 15px
}

@media screen and (max-width: 1300px) {
    main {
        width: 90%;
        margin: 10px auto;
    }
}

@media screen and (max-width: 1024px) {
    main {
        width: 100%;
    }
}
</style>