import { Router } from 'express';
import appointmentsRouter from './AppointmentsRoutes';
import usersRouter from './UserRoutes';

const routes = Router();
routes.use('/appointments', appointmentsRouter);
routes.use('/users', usersRouter);

export default routes;