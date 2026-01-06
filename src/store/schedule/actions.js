import axios from "axios";

export default {

    async getScheduleRow(){
        const response =  await axios.get(`http://localhost:7060/api/schedule?classCode=ALL&page=${this.page}`)
        let cleanSchedule = []
        for(let schedule of response.data.content){
            const [trainData, trainClass, onboardSchedule, departureStation, arrivalStation] = await Promise.all([
                this.enrichTrainCode(schedule.trainCode),
                this.enrichTrainClass(schedule.trainClassCode),
                this.enrichOnboardSchedule(schedule.id),
                this.enrichTrainStation(schedule.departureStationId),
                this.enrichTrainStation(schedule.arrivalStationId)
            ])

            let arrivalTime = new Date(schedule.departureTime)
            arrivalTime = new Date(arrivalTime.setMinutes(arrivalTime.getMinutes() + schedule.duration))
            
            cleanSchedule.push({
                trainName: trainData.name,
                class:trainClass.name,
                minPassengers : onboardSchedule.totalElements,
                maxPassengers : trainData.maxPassengers,
                cost: schedule.cost,
                deptStation: departureStation.name,
                deptTime: new Date(schedule.departureTime),
                arrStation: arrivalStation.name,
                arrTime: arrivalTime,
                duration: schedule.duration,
            })
        }
        this.scheduleGrid = cleanSchedule;
        this.totalPages = response.data.totalPages
    },

    async enrichTrainCode(trainCode){
        let trainCodeResponse = await axios.get(`http://localhost:7060/api/train/one/${trainCode}`)
        return trainCodeResponse.data
    },

    async enrichTrainClass(trainClassCode){
        let trainClassResponse = await axios.get(`http://localhost:7060/api/trainClass/${trainClassCode}`)
         return trainClassResponse.data
    },
    async enrichOnboardSchedule(scheduleId){
        let onboardSchedule = await axios.get(`http://localhost:7060/api/passenger/onBoard/${scheduleId}`)
        return onboardSchedule.data
    },
    async enrichTrainStation(trainStation){
        let trainStationResponse = await axios.get(`http://localhost:7060/api/trainStation/${trainStation}`)
        return trainStationResponse.data
    },
}