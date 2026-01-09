import axios from "axios";
import useLogStore from "./store/log/log-store";

export default function configureAxios(router){

    const logStore = useLogStore()

    axios.defaults.baseURL="http://localhost:7060/api"

    axios.defaults.validateStatus = function(status){
        const blackList = [401, 403, 404, 405, 415, 500];
        return !blackList.includes(status);
    }

    axios.interceptors.response.use(response =>{
        if(response.status >= 200 && response.status < 400){
            let logMessage = `${new Date()}, ${response.status}`
            logStore.log.push(logMessage)
        }
        return response
    })
}