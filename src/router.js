import { createRouter, createWebHistory } from "vue-router";
import TheLayout from "./components/layout/TheLayout.vue"
import SchedulePage from "./components/schedule/SchedulePage.vue";
import ScheduleUpsertForm from "./components/schedule/ScheduleUpsertForm.vue";
import ScheduleDeleteConfirmationForm from "./components/schedule/ScheduleDeleteConfirmationForm.vue";
import PassengerPage from "./components/passenger/PassengerPage.vue";
import PassengerUpsertForm from "./components/passenger/PassengerUpsertForm.vue";
import PassengerDeleteConfirmationForm from "./components/passenger/PassengerDeleteConfirmationForm.vue";

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
                        },
                        {
                            component: ScheduleDeleteConfirmationForm,
                            path: '/schedule/delete/:id',
                            props: true
                        }
                    ] 
                },
                {
                    component: PassengerPage,
                    path: '/passenger',
                    children:[
                        {
                            component: PassengerUpsertForm,
                            path: '/passenger/form/:username?',
                            props: true
                        },
                        {
                            component: PassengerDeleteConfirmationForm,
                            path: '/passenger/delete/:username',
                            props: true
                        }
                    ]
                },
                
            ]
        }
    ]
})

export default router