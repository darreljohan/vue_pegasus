<template>
    <base-title :title="'Schedules'"></base-title>
    <main>
        <base-button 
            :isLink="true",
            :link="'/schedule/form'"
        >
            <i class="fas fa-plus"></i>
            <span>Insert New</span>
        </base-button>
        <schedule-filter></schedule-filter>
        <schedule-row></schedule-row>
        <schedule-pagination></schedule-pagination>
    </main>
    <teleport to="body">
        <router-view></router-view>
    </teleport>
</template>

<script setup>
    import ScheduleFilter from './ScheduleFilter.vue';
    import ScheduleRow from './ScheduleRow.vue';
    import SchedulePagination from './SchedulePagination.vue';
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