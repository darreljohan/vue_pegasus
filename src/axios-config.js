import axios from "axios";

export default function configueAxios(router){
    axios.defaults.baseURL="http://localhost:7060/api"
}