import { createRouter, createWebHistory } from "vue-router";
import TheLayout from "./layout/TheLayout.vue"
import SchedulePage from "./schedule/SchedulePage.vue";
import ScheduleUpsertForm from "./schedule/ScheduleUpsertForm.vue";

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            component: TheLayout,
            path: '/',
            children:[
                {
                    component: SchedulePage,
                    path: '/schedule',
                    children:[
                        {
                            component: ScheduleUpsertForm,
                            path: '/schedule/form/:id?',
                            props: true
                        }
                    ] 
                },
            ]
        }
    ]
})

export default router