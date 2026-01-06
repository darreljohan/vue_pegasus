import { defineStore } from "pinia";
import actions from "./actions";

const useStore = defineStore(
    'trainStore',
    {
        state(){
            return{
            }
        },
        actions
    }
);

export default useStore