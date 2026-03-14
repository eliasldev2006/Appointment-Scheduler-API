export interface Appointment {
  id: string;
  date: Date;
  time: string;
  customerId: string;
  providerId: string;
  service: string;
  status: 'scheduled' | 'completed' | 'canceled';
}