import axios from "axios";

export default function configureAxios(router){
    axios.defaults.baseURL="http://localhost:7060/api"

    axios.defaults.validateStatus = function(status){
        const blackList = [401, 403, 404, 405, 415, 500];
        return !blackList.includes(status);
    }
}