export class Appointment {

  }

  export class AppointmentWithId {
    "appiontmentsInfo": {
      appiontmentsDate : string,
      appiontmentsTime : string,
    }
    "user": {
      name: string;
      surname: string; 
      mail: string;
      gsm: number;
      id: number;
    }
    "vehicle" : {
      plate: number;
      brand: string; 
      carModel: string;
      modelYear: number;
      id: number;
      userId:number;
    }
    id! : number
    apporvedAppiontment!: boolean
  }