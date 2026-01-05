import { createRouter, createWebHistory } from "vue-router";
import TheLayout from "./layout/TheLayout.vue"
import SchedulePage from "./schedule/SchedulePage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            component: TheLayout,
            path: '/',
            children:[
                {
                    component: SchedulePage,
                    path: '/schedule' 
                },
            ]
        }
    ]
})

export default router