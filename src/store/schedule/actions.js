import axios from "axios";

export default {
  triggerTest() {
    console.log(this.triggerTest);
  },
  async getScheduleRow() {
    const response = await axios.get(`/schedule`, {
      params: {
        trainName: this.trainName,
        departureStation: this.deptStation,
        departureTime: this.deptTime,
        classCode: this.trainClass,
      },
    });
    let cleanSchedule = [];
    for (let schedule of response.data.content) {
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

      cleanSchedule.push({
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
      });
    }
    this.scheduleGrid = cleanSchedule;
    this.totalPages = response.data.totalPages;
  },

  async upsertSchedule({payload, keyName}){
    let method = 'post'
    if(payload[keyName]){
      method= 'put'
    }
    let response = await axios[method]('/schedule', payload)
    
    return response
  },

  async findScheduleById(id){
    console.log('run')
    let response = await axios.get(`/schedule/one/${id}`)
    return response.data
  },

  async enrichTrainCode(trainCode) {
    let trainCodeResponse = await axios.get(
      `/train/one/${trainCode}`
    );
    return trainCodeResponse.data;
  },

  async enrichTrainClass(trainClassCode) {
    let trainClassResponse = await axios.get(
      `/trainClass/${trainClassCode}`
    );
    return trainClassResponse.data;
  },
  async enrichOnboardSchedule(scheduleId) {
    let onboardSchedule = await axios.get(
      `/passenger/onBoard/${scheduleId}`
    );
    return onboardSchedule.data;
  },
  async enrichTrainStation(trainStation) {
    let trainStationResponse = await axios.get(
      `/trainStation/${trainStation}`
    );
    return trainStationResponse.data;
  },
  async getTrainClassDropdown() {
    let trainDropdownResponse = await axios.get(
      "/trainClass"
    );
    return trainDropdownResponse.data;
  },
};
