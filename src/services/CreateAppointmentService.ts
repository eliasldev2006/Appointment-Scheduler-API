import { Appointment } from '../models/Appointment';
import AppointmentsRepository from '../repositories/AppointmentsRepository';

interface Request {
  providerId: string;
  customerId: string;
  date: Date;
  time: string;
  service: string;
}

class CreateAppointmentService {
  private appointmentsRepository: AppointmentsRepository;

  constructor(appointmentsRepository: AppointmentsRepository) {
    this.appointmentsRepository = appointmentsRepository;
  }

  public execute({ providerId, customerId, date, time, service }: Request): Appointment {
    
    const allAppointments = this.appointmentsRepository.all();
    
    const findAppointmentInSameTime = allAppointments.find(
      appointment => 
        appointment.date.getTime() === date.getTime() && 
        appointment.time === time &&
        appointment.providerId === providerId
    );


    if (findAppointmentInSameTime) {
      throw Error('Este profissional já possui um agendamento para este horário!');
    }

    const appointment = this.appointmentsRepository.create({
      id: Math.random().toString(36), // Random ID for test
      providerId,
      customerId,
      date,
      time,
      service,
      status: 'scheduled',
    });

    return appointment;
  }
}

export default CreateAppointmentService;