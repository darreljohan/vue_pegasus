import axios from "axios";

export default{
    async refreshGrid() {
        console.log("refresh");
        const response = await axios.get(`/schedule/boarding/${this.filter.username}`, {
            params: {
                trainName: this.filter.trainName,
                departureStation: this.filter.deptStation,
                departureTime: this.filter.deptTime,
                classCode: this.filter.trainClass,
                page: this.pagination.page,
            },
        });
        let cleanSchedule = await Promise.all(
            response.data.content.map((schedule) => {
                return this.enrichSchedule(schedule);
            })
        );

        this.grid = cleanSchedule;
        this.pagination.totalPages = response.data.totalPages;
    },
    async enrichSchedule(schedule) {
        const [
        trainData,
        trainClass,
        onboardSchedule,
        departureStation,
        arrivalStation,
        ] = await Promise.all([
            this.enrichTrainCode(schedule.trainCode),
            this.enrichTrainClass(schedule.trainClassCode),
            this.enrichOnboardSchedule(schedule.id),
            this.enrichTrainStation(schedule.departureStationId),
            this.enrichTrainStation(schedule.arrivalStationId),
        ]);

        let arrivalTime = new Date(schedule.departureTime);

        arrivalTime = new Date(
            arrivalTime.setMinutes(arrivalTime.getMinutes() + schedule.duration)
        );

        return {
            id: schedule.id,
            trainName: trainData.name,
            class: trainClass.name,
            minPassengers: onboardSchedule.totalElements,
            maxPassengers: trainData.maxPassengers,
            cost: schedule.cost,
            deptStation: departureStation.name,
            deptTime: new Date(schedule.departureTime),
            arrStation: arrivalStation.name,
            arrTime: arrivalTime,
            duration: schedule.duration,
        };
    },
    async assign({scheduleId, username}) {
        const response = await axios.post(`/board`,{},{
            params:{
                scheduleId : scheduleId,
                username : username
            }
        })
    },
    async refreshTitleDetail(){
      let response = await axios.get(`/passenger/one/${this.filter.username}`)
      this.titleDetail = `${response.data.firstName} ${response.data.lastName} (${response.data.username})`
    },
    async enrichTrainCode(trainCode) {
        let trainCodeResponse = await axios.get(`/train/one/${trainCode}`);
        return trainCodeResponse.data;
    },
    async enrichTrainClass(trainClassCode) {
        let trainClassResponse = await axios.get(`/trainClass/${trainClassCode}`);
        return trainClassResponse.data;
    },
    async enrichOnboardSchedule(scheduleId) {
        let onboardSchedule = await axios.get(`/passenger/onBoard/${scheduleId}`);
        return onboardSchedule.data;
    },
    async enrichTrainStation(trainStation) {
        let trainStationResponse = await axios.get(`/trainStation/${trainStation}`);
        return trainStationResponse.data;
    }
}