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
                trainName: "",
                deptStation: "",
                deptTime : null,
                trainClass: ""
            }
        },
        actions
    }
);

export default useStore