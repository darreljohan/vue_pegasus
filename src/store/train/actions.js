import axios from "axios";

export default {
    async getTrainDropdown(){
        let trainDropdownResponse = await axios.get(`/train/dropdown`)
        return trainDropdownResponse.data
    }
}