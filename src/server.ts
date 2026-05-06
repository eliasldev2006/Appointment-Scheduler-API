import 'reflect-metadata';
import express from 'express';
import appointmentsRouter from './routes/AppointmentsRoutes'; // 
import './database/data-source'; 
import routes from './routes';
import { AppDataSource } from './database/data-source';

AppDataSource.initialize()
  .then(() => {
    console.log('✅ Database connection established successfully!');
    const app = express();
    app.use(express.json());
    app.use(routes);
    app.use('/appointments', appointmentsRouter);
    app.listen(3333, () => {
      console.log('✅ Server started on port 3333!');
    });

  })
  .catch((err: any) => {
    console.error('❌ Error starting server:', err);
  });