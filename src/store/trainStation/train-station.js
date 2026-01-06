import { defineStore } from "pinia";
import actions from "./actions";

const useStore = defineStore(
    'trainStationStore',
    {
        state(){
            return{
            }
        },
        actions
    }
);

export default useStore