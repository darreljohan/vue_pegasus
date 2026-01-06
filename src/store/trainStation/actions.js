import axios from "axios";

export default {
    async getTrainStationDropdown(){
        let trainStationDropdownResponse = await axios.get(`/trainStation`)
        return trainStationDropdownResponse.data
    }
}