import { Appointment } from "../models/Appointment";

class AppointmentRepository {
        private appointments: Appointment[] = [];

    constructor() {
        this.appointments = [];
    }

    public all = (): Appointment[] => {
        return this.appointments;
    }

    public create(data: Appointment) : Appointment {
        this.appointments.push(data);
        return data;
    }
}

export default AppointmentRepository;