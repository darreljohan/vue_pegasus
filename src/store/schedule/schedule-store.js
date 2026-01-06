import { defineStore } from "pinia";
import actions from "./actions";

const useStore = defineStore(
    'scheduleStore',
    {
        state(){
            return{
                scheduleGrid : [],
                page: 1,
                totalPages: null,
            }
        },
        actions
    }
);

export default useStore