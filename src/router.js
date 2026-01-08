import { createRouter, createWebHistory } from "vue-router";
import TheLayout from "./components/layout/TheLayout.vue"
import SchedulePage from "./components/schedule/SchedulePage.vue";
import ScheduleUpsertForm from "./components/schedule/ScheduleUpsertForm.vue";
import ScheduleDeleteConfirmationForm from "./components/schedule/ScheduleDeleteConfirmationForm.vue";
import PassengerPage from "./components/passenger/PassengerPage.vue";
import PassengerUpsertForm from "./components/passenger/PassengerUpsertForm.vue";
import PassengerDeleteConfirmationForm from "./components/passenger/PassengerDeleteConfirmationForm.vue";
import TrainPage from "./components/train/TrainPage.vue";
import TrainUpsertForm from "./components/train/TrainUpsertForm.vue";
import TrainDeleteConfirmation from "./components/train/TrainDeleteConfirmation.vue";
import PassengerOnBoardPage from "./components/passengerOnBoard/PassengerOnBoardPage.vue";
import BoardingPage from "./components/boarding/BoardingPage.vue";
import NotFound from "./components/error/NotFound.vue";
import axios from "axios";

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
                    alias: '/',
                    children:[
                        {
                            component: ScheduleUpsertForm,
                            path: '/schedule/form/:id?',
                            meta:{
                                keyName : 'id',
                                entity : 'schedule'
                            },
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
                {
                    component: TrainPage,
                    path: '/train',
                    children:[
                        {
                            component: TrainUpsertForm,
                            path: '/train/form/:code?',
                            props:true
                        },
                        {
                            component: TrainDeleteConfirmation,
                            path: '/train/delete/:code',
                            props: true
                        }
                    ]
                },
                {
                    component: PassengerOnBoardPage,
                    path: '/passengerOnBoard/:id',
                    props: true
                },
                {
                    component: BoardingPage,
                    path: '/boarding/:username',
                    props: true
                },
            ]
        },
        {
            component: NotFound,
            path: '/:notFound(.*)'
        }
    ]
})

export default router