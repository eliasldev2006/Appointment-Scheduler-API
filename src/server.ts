import express from 'express';
import appointmentsRouter from './routes/AppointmentsRoutes'; // 

const app = express();
app.use(express.json());

app.use('/appointments', appointmentsRouter);

app.listen(3333, () => {
  console.log('✅ Server started on port 3333!');
});