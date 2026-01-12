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
import useStore from "./store/title/title-store";
import axios from "axios";
import usePOBStore from "./store/passengerOnBoard/passengerOnBoard-store";
import PlaygroundPage from "./components/playground/playgroundPage.vue";

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
                    meta:{
                        test: "test meta"
                    },
                    beforeEnter(){
                        const titleStore = useStore()
                        titleStore.title = 'Schedule'
                    },
                    alias: '/',
                    children:[
                        {
                            component: ScheduleUpsertForm,
                            path: '/schedule/form/:id?',
                            props: true
                        },
                        {
                            component: ScheduleDeleteConfirmationForm,
                            path: '/schedule/delete/:id',
                            props: true,
                        }
                    ] 
                },
                {
                    component: PassengerPage,
                    path: '/passenger',
                    meta:{
                        test: "test meta"
                    },
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
                    props: true,
                    meta:{
                        test: "test meta"
                    },
                    async beforeEnter(to , from){
                        const titleStore = useStore()
                        const pobStore = usePOBStore()
                        let response = await axios.get(`/schedule/one/${to.params.id}`)

                        let [train, trainStation] = await Promise.all([
                            pobStore.enrichTrainCode(response.data.trainCode),
                            pobStore.enrichTrainStation(response.data.arrivalStationId)
                        ])
                        
                        let titleDetail = `${train.name} to ${trainStation.name}`

                        titleStore.title = 'Passenger Of'
                        titleStore.detail = titleDetail
                    },
                },
                {
                    component: BoardingPage,
                    path: '/boarding/:username',
                    props: true
                },
                {
                    component: PlaygroundPage,
                    path: '/playground',
                    props: true
                }
            ]
        },
        {
            component: NotFound,
            path: '/:notFound(.*)'
        }
    ]
})

export default router